import { useState, version } from "react";

function App() {

  let list = [
    {
      name: "Giulia Rossi",
      image: "https://images.unsplash.com/photo-1604025823014-6378b2726338?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Giulia Rossi is a talented chef known for her traditional Italian recipes.",
      profession: "Chef"
    },
    {
      name: "Sofia Bianchi",
      image: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Sofia Bianchi is a renowned fashion designer from Milan, Italy.",
      profession: "Fashion Designer"
    },
    {
      name: "Isabella Conti",
      image: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Isabella Conti is a successful architect known for her innovative designs.",
      profession: "Architect"
    },
    {
      name: "Elena Romano",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Elena Romano is an accomplished pianist who has performed in prestigious venues across Italy.",
      profession: "Pianist"
    },
    {
      name: "Valentina Ferrari",
      image: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Valentina Ferrari is a respected journalist known for her insightful reporting.",
      profession: "Journalist"
    },
    {
      name: "Alessia Marino",
      image: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Alessia Marino is a skilled software engineer specializing in artificial intelligence.",
      profession: "Software Engineer"
    },
    {
      name: "Livia De Luca",
      image: "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Livia De Luca is a celebrated actress renowned for her versatile performances on stage and screen.",
      profession: "Actress"
    },
    {
      name: "Giovanna Moretti",
      image: "https://images.unsplash.com/photo-1505033852907-44fe8ec1e170?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Giovanna Moretti is an award-winning author known for her captivating novels.",
      profession: "Author"
    },
    {
      name: "Francesca Esposito",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Francesca Esposito is a talented painter whose works have been exhibited in galleries worldwide.",
      profession: "Painter"
    },
    {
      name: "Martina Russo",
      image: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Martina Russo is a dedicated pediatrician who has made significant contributions to child healthcare.",
      profession: "Pediatrician"
    },
    {
      name: "Aurora Barbieri",
      image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Aurora Barbieri is a passionate environmentalist committed to preserving Italy's natural beauty.",
      profession: "Environmental Activist"
    },
    {
      name: "Camilla Rinaldi",
      image: "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Camilla Rinaldi is a skilled graphic designer known for her creative and innovative designs.",
      profession: "Graphic Designer"
    },
    {
      name: "Simona Marchetti",
      image: "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Simona Marchetti is a dedicated veterinarian who has saved countless animal lives.",
      profession: "Veterinarian"
    },
    {
      name: "Eleonora Costa",
      image: "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Eleonora Costa is a successful entrepreneur who has founded multiple thriving businesses.",
      profession: "Entrepreneur"
    },
    {
      name: "Caterina Ferri",
      image: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Caterina Ferri is a respected judge known for her impartiality and dedication to justice.",
      profession: "Judge"
    },
    {
      name: "Anna Colombo",
      image: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Anna Colombo is a renowned neuroscientist known for her groundbreaking research in brain disorders.",
      profession: "Neuroscientist"
    },
    {
      name: "Elisa Martini",
      image: "https://images.unsplash.com/photo-1604004215402-e0be233f39be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Elisa Martini is an accomplished fashion photographer whose work has graced the covers of top magazines.",
      profession: "Fashion Photographer"
    },
    {
      name: "Lucia Ferretti",
      image: "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lucia Ferretti is an inspiring humanitarian who has dedicated her life to helping those in need.",
      profession: "Humanitarian"
    },
    {
      name: "Beatrice De Angelis",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Beatrice De Angelis is a talented singer-songwriter known for her soulful melodies and poignant lyrics.",
      profession: "Singer-Songwriter"
    },
    {
      name: "Federica Gatti",
      image: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Federica Gatti is a skilled surgeon known for her precision and expertise in complex procedures.",
      profession: "Surgeon"
    }
  ]
  const [data, setData] = useState(
  list
  );


  let handleSearch = (event) => {
    const inputValue = event.target.value.toLowerCase();
    if (inputValue === "") {
        setData(data); 
    } else {
        const filteredData = data.filter(elem => elem.name.toLowerCase().startsWith(inputValue));
        setData(filteredData);
    }
}


  return (
    <>
      <div className="p-4 w-full h-screen bg-orange-400">
        <div className="search w-full flex items-center justify-center mb-10">
          <input onChange={handleSearch} type="text" placeholder="Search..." className="w-[60%] px-4 py-2 outline-none focus:outline-orange-600 rounded-lg" />
        </div>
        <div className=" profiles w-full h-[80vh] bg-orange-100/25 rounded-[30px] flex gap-10 flex-wrap justify-center items-center overflow-auto">
         {
          data.map((item, index)=>(
            <div key={index} className="profile w-[250px] min-w-[180px] bg-orange-700 p-4 flex flex-col rounded-md items-center justify-center  text-center text-white">
            <div className="img overflow-hidden min-w-[100px] bg-red-100 h-[100px] rounded-full">
              <img src={item.image} alt={index} className="w-full h-full object-cover object-center"/>
            </div>
            <div className="info">
              <h2 className="cursor-pointer inline-block hover:underline text-xl font-bold">{item.name}</h2>
              <h3 className="text-sm opacity-70">{item.profession}</h3>
              <p className="w-full text-center font-serif opacity-90 italic">
               {item.desc}
              </p>
            </div>
          </div>
          ))
         }
        </div>
      </div>
    </>
  );
}

export default App;
