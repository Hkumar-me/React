import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setlength] = useState(8)
  const [inclNum, setInclNum] = useState(false)
  const [inclChar, setInclChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (inclNum) str += "0123456789"
    if (inclChar) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
    }
    // console.log(pass)
    setPassword(pass)
  }, [length, inclChar, inclNum, setPassword])

const copyToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 999)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, inclChar, inclNum, passwordGenerator])

  return (
    <>
      <div className='flex flex-col gap-10 border border-zinc-200  p-5'>
        <div className='flex'>
          <input type="text"
            placeholder='Password'
            value={password}
            className='p-2 w-full'
            ref={passwordRef}
          />
          <button 
          onClick={copyToClipboard}>copy</button>
        </div>

        <div className='flex gap-10'>

          <div className='flex align-center justify-center gap-2'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label>Length : {length}</label>
          </div>

          <div className='flex align-center justify-center gap-2'>
            <input type="checkbox"
              onChange={() => { setInclChar((prev) => !prev) }} />
            <label >inclChar</label>
          </div>

          <div className='flex align-center justify-center gap-2 '>
            <input type="checkbox"
              onChange={() => { setInclNum((prev) => !prev) }} />
            <label >inclNumber</label>
          </div>

        </div>

      </div>


    </>
  )
}

export default App
