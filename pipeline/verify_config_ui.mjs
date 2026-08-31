// 重構後的煙霧測試：確認前端真的從後端拿到平台定義並正確渲染。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import { connect, sleep } from './cdp.mjs'
import { fileURLToPath } from 'node:url'
const IMG = fileURLToPath(new URL('../docs/images/', import.meta.url))
const p = await connect()
await p.goto('http://127.0.0.1:8012')
await p.until(`[...document.querySelectorAll('.stat-card')].length >= 4`,
  { timeout: 120000, every: 1000, label: '主畫面就緒' })
await sleep(1500)
await p.shot(IMG + 'gui-09-config-driven.png')
p.close()
