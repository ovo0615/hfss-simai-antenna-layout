# -*- coding: utf-8 -*-
"""模型載入中，API 要立即回應、清楚說「載入中」。用假 worker，不需要 SimAI。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
"""

import sys
import time

import pytest
from fastapi.testclient import TestClient

from app import main
from app.simai_client import SimAIClient


@pytest.fixture
def slow_client(monkeypatch, tmp_path):
    monkeypatch.setenv("SIMAI_PYTHON", sys.executable)
    monkeypatch.setenv("SIMAI_WORKER_MODULE", "tests.fake_worker")
    monkeypatch.setenv("FAKE_MODE", "ready")
    monkeypatch.setenv("FAKE_DELAY", "3")
    c = SimAIClient()
    c.stderr_log = tmp_path / "worker_stderr.log"
    monkeypatch.setattr(main, "client", c)
    yield c
    c.stop()


def test_startup_does_not_block_and_health_reports_loading(slow_client):
    t0 = time.monotonic()
    with TestClient(main.app) as http:          # 會跑 startup 事件
        assert time.monotonic() - t0 < 2
        r = http.get("/api/health")
        assert r.status_code == 200
        assert r.json()["simai"]["state"] == "loading"

        r = http.post("/api/predict", json={})
        assert r.status_code == 503
        assert "載入中" in r.json()["detail"]


def test_sweep_and_keepout_refuse_while_loading(slow_client):
    slow_client.start_async()
    with TestClient(main.app) as http:
        body = {"config": {"metals": [{"name": "m", "x": 1, "y": 1, "w": 5, "d": 5, "h": 1}]},
                "metal_name": "m"}
        r = http.post("/api/keepout", json=body)
        assert r.status_code == 503
        r = http.post("/api/sweep", json=dict(body, start=0, stop=1))
        assert r.status_code == 503


def test_restart_returns_immediately(slow_client):
    slow_client.start()
    assert slow_client.state == "ready"
    with TestClient(main.app) as http:
        t0 = time.monotonic()
        r = http.post("/api/worker/restart")
        assert time.monotonic() - t0 < 2
        assert r.json()["state"] == "loading"
