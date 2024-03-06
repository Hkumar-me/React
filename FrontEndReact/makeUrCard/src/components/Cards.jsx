import React from 'react'
import Card from './Card'

function Cards({data, removeCard}) {
  return (
    <div  className='container w-full h-[60vh] bg-gradient-to-l from-neutral-400/5 via-neutral-300/5 to-neutral-400/5 p-8 flex overflow-auto gap-2 flex-wrap items-center justify-center'>
        {data.map((item, index)=>{
            return <Card cardInfo={item} index={index} removeCard={removeCard}/>
        })}
    </div>
  )
}

export default Cards
