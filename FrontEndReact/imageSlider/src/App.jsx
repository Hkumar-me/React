import { useState } from 'react'
import './App.css'
import { GrFormNext } from "react-icons/gr";

function App() {
  const [val, setVal] = useState(false)

  return (
    <>
     <div className="w-full h-screen  bg-[#000000ca] flex items-center justify-center">
      <div className="relative img-container w-96 h-52 rounded-md flex overflow-hidden">
        <img className={`shrink-0 w-full h-full object-cover object-center ${val ? "translate-x-[-100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
        <img className={`shrink-0 w-full h-full object-cover object-center ${val ? "translate-x-[-100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
        <span onClick={()=>setVal((prev)=>!prev)} className='cursor-pointer flex items-center justify-center absolute w-8 h-8 rounded-full right-[0%] top-1/2 bg-[#0f0f0f7a] -translate-y-[50%] '>< GrFormNext size={"1.5em"} color={"white"} /></span>
      </div>
     </div>
    </>
  )
}

export default App
