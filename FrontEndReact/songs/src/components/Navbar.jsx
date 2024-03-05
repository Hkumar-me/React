import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex items-center justify-between p-3'>
      <div className="logo">
        <h2 className='text-[orangered] font-bold text-xl'>Orange</h2>
        </div>
        <div className="favs flex gap-2 bg-[orangered] px-2 py-1 rounded-md">
            <h3 className='text-white'>Favourites</h3>
            <h3 className='text-white'>2</h3>
        </div>
    </div>
  )
}

export default Navbar
