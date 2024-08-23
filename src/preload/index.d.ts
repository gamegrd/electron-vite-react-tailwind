export {}

declare global {
  interface Window {
    context: {
      onUpdateCounter: (callback: (value: unknown) => void) => void
    }
  }
}
