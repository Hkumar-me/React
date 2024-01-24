import { useState } from 'react'
import './App.css'
import Cards from './components/cards' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards username="Angelina Jolie" btnText="Click ME"/>
      <Cards username="Clarke Griffin" btnText="Visit"/>
      <Cards username="Winslet" btnText="Click ME"/>
    </>
  )
}

export default App
