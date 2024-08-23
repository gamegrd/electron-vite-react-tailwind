import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    onUpdateCounter: (callback) => {
      ipcRenderer.on('update-counter', (_event, value) => {
        callback(value)
      })
    }
  })
} catch (error) {
  console.error(error)
}
