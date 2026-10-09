# -*- coding: utf-8 -*-
"""SimAIClient 的載入／推論逾時與背景載入。用假 worker，不需要 SimAI。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

執行：在 web_app/backend 下 `.venv/Scripts/python.exe -m pytest tests -q`
"""

import sys
import time

import pytest

from app import simai_client
from app.simai_client import SimAIClient, WorkerDead, WorkerLoading


@pytest.fixture
def make_client(monkeypatch, tmp_path):
    made = []

    def _make(mode="ready", delay=0, load_timeout=None, predict_timeout=None):
        monkeypatch.setenv("SIMAI_PYTHON", sys.executable)
        monkeypatch.setenv("SIMAI_WORKER_MODULE", "tests.fake_worker")
        monkeypatch.setenv("FAKE_MODE", mode)
        monkeypatch.setenv("FAKE_DELAY", str(delay))
        for key, val in (("SIMAI_LOAD_TIMEOUT", load_timeout),
                         ("SIMAI_PREDICT_TIMEOUT", predict_timeout)):
            if val is None:
                monkeypatch.delenv(key, raising=False)
            else:
                monkeypatch.setenv(key, str(val))
        c = SimAIClient()
        c.stderr_log = tmp_path / ("worker_stderr_%d.log" % len(made))
        made.append(c)
        return c

    yield _make
    for c in made:
        c.stop()


def _wait_state(c, want, limit=30.0):
    t0 = time.monotonic()
    while time.monotonic() - t0 < limit:
        if c.state == want:
            return
        time.sleep(0.1)
    raise AssertionError("等不到 state=%s（現在 %s：%s）" % (want, c.state, c.reason))


def _wait_proc(c, limit=10.0):
    t0 = time.monotonic()
    while time.monotonic() - t0 < limit:
        if c._proc is not None:
            return c._proc
        time.sleep(0.05)
    raise AssertionError("背景載入沒有啟動 worker")


# ── 載入 ────────────────────────────────────────────────────────
def test_normal_load_reaches_ready(make_client):
    c = make_client()
    c.start()
    assert c.state == "ready" and c.ready
    assert c.predict(config={}) == {"peak": 1.0}


def test_load_timeout_kills_worker_and_says_why(make_client):
    c = make_client(mode="hang", load_timeout=2)
    t0 = time.monotonic()
    c.start()
    assert time.monotonic() - t0 < 8
    assert c.state == "failed" and not c.ready
    assert "超過 2 秒" in c.reason
    assert "SIMAI_LOAD_TIMEOUT" in c.reason
    assert "mode=hang" in c.reason          # 附上 stderr 最後幾行
    assert not c.alive


def test_worker_exit_reason_includes_stderr_tail(make_client):
    c = make_client(mode="exit")
    c.start()
    assert c.state == "failed"
    assert "torch DLL load failed" in c.reason
    assert str(c.stderr_log) in c.reason


def test_first_line_not_json(make_client):
    c = make_client(mode="noise", load_timeout=10)
    c.start()
    assert c.state == "failed"
    assert "不是 JSON" in c.reason and "Loading stochos" in c.reason
    assert not c.alive


def test_missing_python_fails_fast(make_client, monkeypatch):
    c = make_client()
    c.python = "no_such_dir/python.exe"
    c.start()
    assert c.state == "failed" and "找不到 SimAI 的 python" in c.reason


# ── 背景載入 ────────────────────────────────────────────────────
def test_start_async_returns_immediately_and_reports_loading(make_client):
    c = make_client(delay=3)
    t0 = time.monotonic()
    c.start_async()
    assert time.monotonic() - t0 < 1
    st = c.status()
    assert st["state"] == "loading" and st["ready"] is False
    assert st["loading_seconds"] >= 0

    # 載入中推論不排隊等鎖，直接說「載入中」
    t0 = time.monotonic()
    with pytest.raises(WorkerLoading, match="載入中"):
        c.predict(config={})
    assert time.monotonic() - t0 < 1

    _wait_state(c, "ready")
    assert c.predict(config={}) == {"peak": 1.0}


def test_start_async_twice_does_not_spawn_second_worker(make_client):
    c = make_client(delay=2)
    c.start_async()
    proc = _wait_proc(c)
    c.start_async()
    _wait_state(c, "ready")
    assert c._proc is proc


def test_stop_during_loading_returns_quickly(make_client):
    c = make_client(mode="hang", load_timeout=120)
    c.start_async()
    _wait_proc(c)
    t0 = time.monotonic()
    c.stop()
    assert time.monotonic() - t0 < 10
    assert c.state == "stopped" and not c.alive


# ── 推論 ────────────────────────────────────────────────────────
def test_predict_timeout_releases_lock(make_client):
    c = make_client(mode="predict_hang", predict_timeout=2)
    c.start()
    t0 = time.monotonic()
    with pytest.raises(WorkerDead, match="超過 2 秒"):
        c.predict(config={})
    assert time.monotonic() - t0 < 8
    assert c.state == "failed" and not c.alive

    # 鎖已放開：重新載入要能在數秒內完成
    t0 = time.monotonic()
    c.stop()
    c.start()
    assert time.monotonic() - t0 < 10
    assert c.state == "ready"


def test_crashed_worker_restarts_in_background(make_client):
    c = make_client(delay=1)
    c.start()
    c._proc.kill()
    c._proc.wait()
    with pytest.raises(WorkerLoading):
        c.predict(config={})
    _wait_state(c, "ready")
    assert c.predict(config={}) == {"peak": 1.0}


def test_failed_load_is_not_retried_by_predict(make_client):
    c = make_client(mode="exit")
    c.start()
    with pytest.raises(WorkerDead) as exc:
        c.predict(config={})
    assert not isinstance(exc.value, WorkerLoading)
    assert c.state == "failed"


# ── 設定 ────────────────────────────────────────────────────────
def test_timeout_env_defaults_and_bad_values(make_client, monkeypatch):
    c = make_client()
    assert c.load_timeout == 900 and c.predict_timeout == 120
    monkeypatch.setenv("SIMAI_LOAD_TIMEOUT", "abc")
    monkeypatch.setenv("SIMAI_PREDICT_TIMEOUT", "-5")
    c2 = SimAIClient()
    assert c2.load_timeout == 900 and c2.predict_timeout == 120


def test_default_stderr_log_is_under_runs():
    assert simai_client.DEFAULT_STDERR_LOG.parent.name == "runs"
