import { useState } from 'react'
import Nav from './components/Nav'
import Routers from './Utils/Routers'

function App() {


  return (
    <>
      <div className='w-full  bg-orange-900'>
        <Nav />
        <Routers />
      </div>
    </>
  )
}

export default App
