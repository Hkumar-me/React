import React from 'react'
import {useForm} from 'react-hook-form'
function Form3() {

    let {register, handleSubmit} = useForm();
    // console.log(register())
  return (
    <div className='w-full h-screen bg-zinc-950 flex flex-col items-center gap-52'>
        <h2 className='w-full p-4 text-white text-center font-bold text-xl'>Form handling using Form-react-hook</h2>
        <form action="" className='w-[50%] h-[50vh] flex flex-col gap-4 items-center justify-start' 
        onSubmit={handleSubmit(data => console.log(data))}>
            <input {...register("name")} type="text" placeholder='name' className='p-3 w-full '/>
            <input {...register("email")} type="email" placeholder='email' className='p-3 w-full' />
            <input {...register("password")} type="password" placeholder='password' className='p-3 w-full' />
            <input type="submit" className='p-3 bg-blue-800 text-white rounded-md' />
        </form>
    </div>
  )
}

export default Form3
