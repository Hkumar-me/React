import { useRef, useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
import { FaInfoCircle } from "react-icons/fa";

function App() {
  let [data, setData] = useState([]);

  let instructionDiv = useRef(null);

  let makeCard = (userInfo)=>{
    setData([...data, userInfo]);
  }

  let removeCard = (id)=>{
    setData(()=>data.filter((item, index)=> index!=id));
  }

  let [isDisplayed, setIsDisplayed] = useState(false);
  let showInstructionsDiv = ()=>{
   setIsDisplayed((prev)=>!prev);
   setTimeout(()=>{
    setIsDisplayed(false)
   }, 20000)
  }

  return (
    <>
    <div className="main w-full h-screen flex justify-center flex-col items-center gap-2 bg-gradient-to-l from-black via-stone-700 to-black p-4">
      <div ref={instructionDiv} className={`instructions w-[400px] h-[fit] bg-zinc-400 p-4 absolute top-[5%] right-[2%] ${isDisplayed ? "opacity-1" : "opacity-0"}`}>
        <h3>Instructions:</h3>
        <ol className='flex flex-col list-decimal p-4'>
          <li className='font-medium text-justify'>Enter your name, email, a word that tells who u are (for eg: Student) and a public Url of image which u want to display on card.</li>
          <li className='font-medium text-justify'>Submit to get ur card displayed on Screen.</li>
          <li className='font-medium text-justify'>Click on "Remove It" Button on card to remove Card.</li>
        </ol>
      </div>
    <span className='absolute top-[2%] right-[2%]' onClick={showInstructionsDiv} ><FaInfoCircle color={"white"}/></span>
      <h1 className='w-full text-center font-[500] underline text-[30px] text-white'>Well... Come to Make Your Card Website</h1>
      <Cards data={data} removeCard={removeCard}/>
      <Form data={data} makeCard={makeCard} />
    </div>
    </>
  )
}

export default App
