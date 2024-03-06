import React from 'react'
import { useRef, useState } from 'react'

function Form1() {


    
  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);
  let handleSubmit = (event)=>{
    event.preventDefault();
   
    console.log(name.current.value)
    console.log(email.current.value)
    console.log(password.current.value)
  }


  return (
    <div className="w-full h-screen bg-zinc-800 p-10 flex flex-col justify-center items-center gap-48 ">
        <h2 className='w-full p-3 text-white text-xl font-bold text-center'>Form Handling Using useRef()</h2>
    <form action="" className=' w-[50%] flex flex-col gap-y-2 items-center justify-center' onSubmit={handleSubmit}>
      <input ref={name} type="text" placeholder='Name' className='w-full p-3 outline-green-600'/> <br />
      <input ref={email} type="email" placeholder='Email Address' className='w-full p-3 outline-green-600'/> <br />
      <input ref={password} type="password" name="" id="" placeholder='Password' className='w-full p-3 outline-green-600'/> <br />
      <input type="submit" className='bg-blue-400 mt-3 px-3 py-1 rounded-md w-20' />
    </form>
  </div>
  )
}

export default Form1
