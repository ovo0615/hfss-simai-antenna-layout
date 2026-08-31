// 為操作說明拍截圖。所有圖取自同一次真實操作，沒有擺拍。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
//
// 用法：先啟動 web_app（start.bat）與 headless Chrome（--remote-debugging-port=9222），
//       再 node capture_shots.mjs
import { connect, sleep } from './cdp.mjs'
import { fileURLToPath } from 'node:url'
const IMG = fileURLToPath(new URL('../docs/images/', import.meta.url))

const OUT = IMG
const APP = 'http://127.0.0.1:8012'

const p = await connect()
await p.goto(APP)

// 等模型載入完成再拍，否則會拍到「載入中」
await p.until(
  `[...document.querySelectorAll('.stat-card')].length >= 4`,
  { timeout: 120000, every: 1000, label: '主畫面就緒' }
)

const clickText = (sel, text) =>
  p.js(`(function(){const b=[...document.querySelectorAll('${sel}')]
    .find(x=>x.innerText.includes(${JSON.stringify(text)})); if(b){b.click();return true} return false})()`)

// ── 01 起點：乾淨平台 ────────────────────────────────────────────
await clickText('.ghost-btn', '乾淨平台')
await p.until(`document.querySelectorAll('canvas').length>0 &&
  !document.querySelector('.stat-value').innerText.includes('—')`,
  { timeout: 60000, every: 500, label: '乾淨平台預測完成' })
await sleep(1200)
await p.shot(`${OUT}/gui-01-clean.png`)

// ── 02 留出樣本：SimAI 與 HFSS 真解並排 ──────────────────────────
await clickText('.ghost-btn', 'battery_near_00')
await p.until(`document.querySelectorAll('.stat-card')[1].innerText.includes('誤差')`,
  { timeout: 60000, every: 500, label: '留出樣本預測完成' })
await sleep(1500)
await p.shot(`${OUT}/gui-02-holdout.png`)

// ── 03 只看 SimAI 場型（關掉真解線框）────────────────────────────
await clickText('.ghost-btn', '隱藏 HFSS 真解')
await sleep(900)
await p.shot(`${OUT}/gui-03-pattern-only.png`)
await clickText('.ghost-btn', '疊上 HFSS 真解')
await sleep(600)

// ── 04 驗證報告 ─────────────────────────────────────────────────
await clickText('.ghost-btn', '驗證報告')
await p.until(`document.querySelector('h2') &&
  document.querySelector('h2').innerText.includes('留一種拓樸')`,
  { timeout: 60000, every: 500, label: '報告載入' })
await sleep(1200)
await p.shot(`${OUT}/gui-04-report.png`)

// ── 05 報告：場型切面（捲到底，讓整張圖表都在畫面內）──────────────
await p.js(`(function(){const c=[...document.querySelectorAll('div')]
  .find(d=>d.scrollHeight>d.clientHeight+50 && d.scrollTop!==undefined);
  if(c) c.scrollTop = c.scrollHeight; return c? c.scrollHeight : 0})()`)
await sleep(1000)
await p.shot(`${OUT}/gui-05-pattern-cut.png`)

// 讀回畫面關鍵字核對，避免拍到標錯名字的圖
const check = await p.js(`JSON.stringify({
  h2: (document.querySelector('h2')||{}).innerText || null,
  cards: [...document.querySelectorAll('.stat-card')].map(c=>c.innerText.split('\\n')[0])
})`)
console.log('最後畫面核對:', check)
p.close()
console.log('截圖完成 →', OUT)
