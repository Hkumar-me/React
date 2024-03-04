import React, { useState } from "react";

function App() {
  const laptops = [
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "HP Pavilion",
      desc: "Powerful and reliable laptop with the latest features.",
      img: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "MacBook Pro",
      desc: "High-performance laptop designed for creative professionals.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
    {
      name: "Dell Inspiron",
      desc: "Versatile laptop with a sleek design and excellent performance.",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
    },
    {
      name: "Asus ZenBook",
      desc: "Thin and lightweight laptop with a stunning display.",
      img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
    },
  ];

  const [first, setfirst] = useState([{name:"virat", age:30},{name:"sachin", age:40},{name:"dhoni", age:35}]);

  return (
    <>
      <div className='w-full h-min-[100vh] bg-zinc-900 text-lg bold flex items-center justify-center gap-2 flex-wrap'>
      {
        laptops.map((laptop, index)=> (
          <div className="card w-[200px] h-[270px] bg-zinc-100 flex flex-col justify-between p-2 rounded-md flex-shrink-0 ">
          <div className="img w-full h-[45%]" >
            <img src={`${laptop.img}`} alt="" className='object-cover object-center w-full h-full' />
          </div>
            <div className="card-info w-full h-[55%] p-2 flex flex-col justify-between gap-1 items-start">
              <h2 className="name font-bold">{laptop.name}</h2>
              <p className='text-sm w-full text-pretty'>{laptop.desc}</p>
              <button className={`px-3 py-1 ${laptop.instock ? "bg-blue-600" : "bg-red-600"} text-white`}>{laptop.instock ? "In Stock" : "Out of Stock"}</button>
            </div>
          </div>
        ))
      }
      </div>
    </>
  );
}

export default App;
