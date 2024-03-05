import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Angel",
      img: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Engineer",
      isFriend: false,
    },
    {
      name: "Lagertha",
      img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Dancer",
      isFriend: false,
    },
    {
      name: "Kate Winslet",
      img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Designer",
      isFriend: false,
    },
    {
      name: "Emily Brown",
      img: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Doctor",
      isFriend: false,
    },
    {
      name: "Monica Bellucci",
      img: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Writer",
      isFriend: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  const handleFriend = (clickedIndex) => {
    setRealData((prevData) => {
      return prevData.map((item, index) => {
        if (index === clickedIndex) {
          return { ...item, isFriend: !item.isFriend};
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-blue-800 to-indigo-900 p-3 flex gap-3 items-center justify-center">
        {realData.map((elem, index) => (
          <Card data={elem} index={index} handleFriend={handleFriend} />
        ))}
      </div>
    </>
  );
}

export default App;
