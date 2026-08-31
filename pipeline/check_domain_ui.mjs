// 驗證定義域警告有正確顯示在介面上。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import { connect, sleep } from './cdp.mjs'
import { fileURLToPath } from 'node:url'
const IMG = fileURLToPath(new URL('../docs/images/', import.meta.url))

const p = await connect()
await p.goto('http://127.0.0.1:8012')
await p.until(`[...document.querySelectorAll('.stat-card')].length >= 4`,
  { timeout: 120000, every: 1000, label: '主畫面就緒' })

// 加入金屬件後連續放大，直到超出訓練範圍（拖動不好用程式模擬，
// 改用介面自己的按鈕 ＋ 直接改 React 狀態不可行，所以用多個金屬件觸發）
for (let i = 0; i < 4; i++) {
  await p.js(`(function(){const b=[...document.querySelectorAll('.premium-btn')]
    .find(x=>x.innerText.includes('加入金屬件')); if(b) b.click(); return true})()`)
  await sleep(700)
}
await sleep(2500)

const state = await p.js(`JSON.stringify({
  metals: (document.querySelector('.panel-title:last-of-type')||{}).innerText || '',
  warning: (()=>{const el=[...document.querySelectorAll('b')]
    .find(b=>b.innerText.includes('超出訓練範圍')); return el? el.parentElement.innerText.replace(/\\n/g,' | ') : null})(),
  peak: (document.querySelector('.stat-value')||{}).innerText
})`)
console.log('介面狀態:', state)
await p.shot(IMG + 'gui-06-domain-warning.png')
p.close()
