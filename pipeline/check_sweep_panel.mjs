// 捲到右側面板底部，確認位置敏感度掃描的圖表有畫出來。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import { connect, sleep } from './cdp.mjs'
import { fileURLToPath } from 'node:url'
const IMG = fileURLToPath(new URL('../docs/images/', import.meta.url))

const p = await connect()
await p.js(`(function(){const el=document.querySelector('.right-panel');
  if(el) el.scrollTop = el.scrollHeight; return true})()`)
await sleep(1200)
await p.shot(IMG + 'gui-08-sweep.png')
p.close()
