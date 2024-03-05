import React from 'react'
import Styles from './styles.module.css'
function Navbar({data}) {
  return (
    <div className='w-full flex items-center justify-between p-3'>
      <div className={`${Styles.myBgColor} ${Styles.myColor}`}>
        <h2 className='p-2 font-bold text-xl'>Orange</h2>
        </div>
        <div className="favs flex gap-2 bg-[orangered] px-2 py-1 rounded-md">
            <h3 className='text-white'>Favourites</h3>
            <h3 className='text-white'>{data.filter((elem)=>elem.isadded).length}</h3>
        </div>
    </div>
  )
}

export default Navbar
