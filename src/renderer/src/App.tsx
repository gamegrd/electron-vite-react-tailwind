import * as React from 'react'
import './App.scss'

const App = (): JSX.Element => {
  window.context.onUpdateCounter((value) => {
    console.log('value:', value)
  })

  return (
    <React.Fragment>
      <div className="text-center">Hello World</div>
    </React.Fragment>
  )
}

export default App
