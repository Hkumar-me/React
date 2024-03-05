import React from 'react'

function songCard({song, index, handleClick}) {
    let {img, songname, artist, isadded}= song;

  return (
    <div index={index} className='rounded-md relative w-52 h-24 p-2 bg-zinc-300 flex gap-2 shrink-0'>
      <div className="img w-16 h-16  ">
        <img src={img} className='w-full h-full object-cover object-center' alt="" />
      </div>
      <div className="info">
        <h2 className='font-semibold'>{songname}</h2>
        <h2>{artist}</h2>
      </div>
    <button onClick={()=>handleClick(index)} className={`px-3 py-1 ${isadded ? "bg-blue-700":"bg-[orangered]"} text-white rounded-md absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-nowrap`}>{isadded ? "Added" :"Add to Favorite"}</button>
    </div>
  )
}

export default songCard
