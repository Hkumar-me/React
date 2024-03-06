import React from 'react'
import {useForm} from 'react-hook-form'
function Form({makeCard}) {

    let {register, handleSubmit, reset} = useForm();
    let onSubmitFunction =(data)=>{
        makeCard(data)
        reset();
    }

  return (
    <div className='w-full h-[30vh] flex items-center justify-center'>
        <form action="" className='flex flex-col w-[40%] gap-1' onSubmit={handleSubmit(onSubmitFunction)}>
            <input {...register('name')} className='p-2 rounded-md font-bold' type="text" placeholder='name' />
            <input {...register('email')} className='p-2 rounded-md font-bold' type="email" placeholder='email' />
            <input {...register('profession')} className='p-2 rounded-md font-bold' type="profession" placeholder='who are u in 1 word' />
            <input {...register('imageUrl')} className='p-2 rounded-md font-bold' type="text" placeholder='Your Image Url' />
            <input  type="submit" value="Submit" className='w-[20%] self-center px-3 py-1 bg-blue-700 text-white rounded-md'/>
        </form>
    </div>
  )
}

export default Form
