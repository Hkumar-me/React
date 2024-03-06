import React from 'react'

function Card({cardInfo, index, removeCard}) {


  return (
    <div key={index} index={index} className=' shrink-0 w-52 p-4 bg-zinc-800 flex flex-col justify-center items-center gap-1 rounded-lg'>
      <div className="img w-20 h-20 rounded-full bg-[red] overflow-hidden">
        <img src={cardInfo.imageUrl} className='w-full h-full object-cover object-center' alt="img" />
      </div>
      <h2 className='font-bold text-white'>{cardInfo.name}</h2>
      <h2 className='font-semibold opacity-80 text-white'>{cardInfo.email}</h2>
      <h2 className='font-thin text-white'>{cardInfo.profession}</h2>
      <button onClick={()=>removeCard(index)} className='bg-red-600 px-3 py-1 rounded-md text-white font-bold '>Remove It</button>
    </div>
  )
}

export default Card
