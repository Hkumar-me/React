import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [color, setColor] = useState("pink")
  return (
    <>
      <div
        className="w-full h-screen flex align-center justify-center"
        style={{ backgroundColor: color }}>
        <div className="flex fixed bottom-10  shadow-lg bg-black px-5 py-4 justify-center gap-8 align-center rounded-2xl ">
          <div className='bg-white px-4 rounded-lg cursor-pointer text-white' style={{backgroundColor: "red"}} onClick={()=>{setColor("red")}}>Red</div>
          <div className='bg-white px-4 rounded-lg cursor-pointer text-white' style={{backgroundColor: "blue"}} onClick={()=>{setColor("Blue")}}>Blue</div>
          <div className='bg-white px-4 rounded-lg cursor-pointer text-white' style={{backgroundColor: "brown"}} onClick={()=>{setColor("Brown")}}>Brown</div>
          <div className='bg-white px-4 rounded-lg cursor-pointer text-white' style={{backgroundColor: "yellow"}} onClick={()=>{setColor("yellow")}}>yellow</div>
          <div className='bg-white px-4 rounded-lg cursor-pointer text-white' style={{backgroundColor: "orange"}} onClick={()=>{setColor("orange")}}>orange</div>
          <div className='bg-white px-4 rounded-lg cursor-pointer text-white' style={{backgroundColor: "violet"}} onClick={()=>{setColor("violet")}}>violet</div>
          <div className='bg-white px-4 rounded-lg cursor-pointer text-white' style={{backgroundColor: "salmon"}} onClick={()=>{setColor("salmon")}}>Salmon</div>
          
        </div>
      </div>



    </>
  )
}

export default App
