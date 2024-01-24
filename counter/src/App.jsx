import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  function incValue() {
    counter = counter + 1
    console.log(counter)
    setCounter(counter)
  }
  function decValue() {
    counter = counter - 1
    console.log(counter)
    setCounter(counter)
  }


  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={incValue}>Increase Value</button>
      <button onClick={decValue}>decrease Value</button>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
    </>
  )
}

export default App
