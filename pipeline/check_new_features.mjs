// 驗證接地面外型選擇器與位置敏感度掃描。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import { connect, sleep } from './cdp.mjs'
import { fileURLToPath } from 'node:url'
const IMG = fileURLToPath(new URL('../docs/images/', import.meta.url))

const OUT = IMG
const p = await connect()
await p.goto('http://127.0.0.1:8012')
await p.until(`[...document.querySelectorAll('.stat-card')].length >= 4`,
  { timeout: 120000, every: 1000, label: '主畫面就緒' })

const clickText = (text) =>
  p.js(`(function(){const b=[...document.querySelectorAll('.ghost-btn,.premium-btn')]
    .find(x=>x.innerText.includes(${JSON.stringify(text)})); if(b){b.click();return true} return false})()`)

// 1. 接地面外型：切到左上開孔
const okNotch = await clickText('左上開孔')
await sleep(2500)
const notchState = await p.js(`JSON.stringify({
  warn: (()=>{const b=[...document.querySelectorAll('b')].find(x=>x.innerText.includes('超出訓練範圍'));
    return b? b.parentElement.innerText.replace(/\\n/g,' | ').slice(0,120) : null})(),
  peak: (document.querySelector('.stat-value')||{}).innerText
})`)
console.log('切到左上開孔:', okNotch, notchState)
await p.shot(`${OUT}/gui-07-ground-shape.png`)

// 2. 回到矩形，加金屬件，跑掃描
await clickText('矩形（基準）')
await sleep(1800)
await clickText('加入金屬件')
await sleep(2500)
const started = await clickText('沿 y 掃描')
console.log('啟動掃描:', started)
await p.until(`document.querySelectorAll('svg').length > 0 &&
  [...document.querySelectorAll('*')].some(e=>e.innerText && e.innerText.includes('增益跨度'))`,
  { timeout: 120000, every: 1000, label: '掃描完成' })
await sleep(1200)
// 掃描面板在右側捲動區底部，要捲下去才拍得到
await p.js(`(function(){const el=document.querySelector('.right-panel');
  if(el) el.scrollTop = el.scrollHeight; return true})()`)
await sleep(1200)
await p.shot(`${OUT}/gui-08-sweep.png`)
p.close()
