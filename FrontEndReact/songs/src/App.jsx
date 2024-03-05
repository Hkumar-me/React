import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SongCard from './components/SongCard'
function App() {

  const songsArray = [
    {
      img: "https://images.unsplash.com/photo-1612187209234-3b9a15d327e6?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songname: "Song 1",
      artist: "Artist 1",
      isadded: false
    },
    {
      img: "https://images.unsplash.com/photo-1631795559143-f3358a656cec?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songname: "Song 2",
      artist: "Artist 2",
      isadded: false
    },
    {
      img: "https://images.unsplash.com/photo-1493972741200-51d407e0ee33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songname: "Song 3",
      artist: "Artist 3",
      isadded: false
    },
    {
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songname: "Song 4",
      artist: "Artist 4",
      isadded: false
    }
  ];
  
 let [data, setData] = useState(songsArray)
  let handleClick = (clickedIndex)=>{
    setData((prevData)=> prevData.map((item, index)=>{
      if(index === clickedIndex){
        return {...item, isadded:!item.isadded};
      } 
      return item;
    }))
  }


  return (
    <>
    <Navbar data={data}/>
    <div className='p-10 flex gap-7 flex-wrap'>
      {
        data.map((song, index)=><SongCard song={song} index={index}  handleClick ={handleClick} key= {index} /> )
      }
    </div>
    </>
  )
}

export default App
