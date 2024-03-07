import React from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <div className="w-full h-screen bg-blue-700 flex ">
      <div className="box w-[50%] h-full flex flex-col items-center self-start gap-10 border-r-2">
        <h2 className="text-white text-[40px] font-bold">
          Welcome to USERS page
        </h2>
        <div className="list w-full flex flex-col items-center justify-center ">
          <ul className="flex flex-col w-full gap-2 items-center justify-center ">
           {["Harsh", "Modi Ji", "Putin Bhai", "Biden Shaab", "Elon Musky"].map((elem,index)=>(
            <Link to={`/users/${elem}`} ><li className="text-white w-[fit] flex justify-center items-center font-semibold text-lg bg-blue-800 rounded-md px-3 py-1 cursor-pointer">{elem}
          </li></Link>
           ))}
          </ul>
        </div>
      </div>
      <Outlet  />
    </div>
  );
}

export default Users;
