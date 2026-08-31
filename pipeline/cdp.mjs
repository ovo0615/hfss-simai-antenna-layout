// 用 Chrome DevTools Protocol 驅動 headless Chrome：導覽、執行 JS、送真實滑鼠事件、截圖。
// Node 24 內建 WebSocket，所以不需要任何套件。
import { writeFileSync } from 'node:fs'

const PORT = process.env.CDP_PORT || 9222

export async function connect() {
  let list
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/list`)
      list = await r.json()
      if (list.some((t) => t.type === 'page')) break
    } catch {}
    await sleep(250)
  }
  const page = list.find((t) => t.type === 'page')
  if (!page) throw new Error('找不到可用的 page target')
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej })

  let id = 0
  const pending = new Map()
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data)
    if (msg.id && pending.has(msg.id)) {
      const { res, rej } = pending.get(msg.id)
      pending.delete(msg.id)
      msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result)
    }
  }
  const send = (method, params = {}) =>
    new Promise((res, rej) => {
      const mid = ++id
      pending.set(mid, { res, rej })
      ws.send(JSON.stringify({ id: mid, method, params }))
    })

  await send('Page.enable')
  await send('Runtime.enable')

  const api = {
    send,
    close: () => ws.close(),

    async goto(url) {
      await send('Page.navigate', { url })
      await sleep(1200)
    },

    /** 在頁面裡跑一段 JS，回傳它的值（支援 Promise）。 */
    async js(expression) {
      const r = await send('Runtime.evaluate', {
        expression: `(async () => { ${expression} })()`,
        awaitPromise: true, returnByValue: true,
      })
      if (r.exceptionDetails) {
        throw new Error('頁面例外：' + JSON.stringify(r.exceptionDetails.exception))
      }
      return r.result.value
    },

    /** 等到 JS 條件為真；逾時就丟出錯誤，不要靜靜地繼續截一張錯的圖。 */
    async until(expression, { timeout = 300000, every = 500, label = expression } = {}) {
      const t0 = Date.now()
      while (Date.now() - t0 < timeout) {
        if (await api.js(`return !!(${expression})`)) return
        await sleep(every)
      }
      throw new Error(`等待逾時（${Math.round((Date.now() - t0) / 1000)} 秒）：${label}`)
    },

    async move(x, y) {
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, buttons: 0 })
    },

    /** 真實的滑鼠拖曳：按下、逐步移動、放開。中間的移動不能省——
     *  畫布是靠 mousemove 累積出框選矩形的，只送起點與終點會得到一個空矩形。 */
    async drag(x0, y0, x1, y1, steps = 12) {
      await send('Input.dispatchMouseEvent', {
        type: 'mousePressed', x: x0, y: y0, button: 'left', buttons: 1, clickCount: 1 })
      for (let i = 1; i <= steps; i++) {
        await send('Input.dispatchMouseEvent', {
          type: 'mouseMoved', button: 'left', buttons: 1,
          x: x0 + (x1 - x0) * i / steps, y: y0 + (y1 - y0) * i / steps })
        await sleep(20)
      }
      await send('Input.dispatchMouseEvent', {
        type: 'mouseReleased', x: x1, y: y1, button: 'left', buttons: 0, clickCount: 1 })
    },

    async click(x, y) {
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved', x, y, buttons: 0 })
      await send('Input.dispatchMouseEvent', {
        type: 'mousePressed', x, y, button: 'left', buttons: 1, clickCount: 1 })
      await sleep(40)
      await send('Input.dispatchMouseEvent', {
        type: 'mouseReleased', x, y, button: 'left', buttons: 0, clickCount: 1 })
    },

    async shot(path, clip) {
      const r = await send('Page.captureScreenshot',
        clip ? { format: 'png', clip: { ...clip, scale: 1 } } : { format: 'png' })
      writeFileSync(path, Buffer.from(r.data, 'base64'))
      return path
    },
  }
  return api
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
