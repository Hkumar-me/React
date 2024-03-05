import React from 'react'

function Card({data, index, handleFriend}) {
    let { profession, img, isFriend ,name } = data;

  return (
    <div index={index} key={index} className='shrink-0 w-[200px] h-[300px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-md overflow-hidden p-1'>
      <div className="img w-full h-[60%]">
        <img src={img} alt="img" className='w-full h-full object-cover object-top' />
      </div>
      <div className='p-2 h-[40%] flex flex-col bg-gradient-to-l from-stone-400 via-neutral-300 to-neutral-400  justify-around items-center gap-2'>
        <h1 className='font-bold text-xl '>{name}</h1>
        <h3 className='font-light '>{profession}</h3>
        <button onClick={()=>handleFriend(index)} className={`px-3 py-1 ${isFriend ? "bg-red-600" : "bg-blue-500"} rounded-md text-white`}>{isFriend ? "Remove Friend" : "Add Friend"}</button>
      </div>
    </div>
  )
}

export default Card
