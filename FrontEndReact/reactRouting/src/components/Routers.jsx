import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import UserInfo from "./UserInfo";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/users" element={<Users />}>
        <Route path=":name" element={<UserInfo />}></Route>
      </Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default Routers;
