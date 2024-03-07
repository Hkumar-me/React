import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="sticky top-0 w-full p-4 bg-orange-500 flex justify-center gap-10">
      {[{name:"Home", to:"/"}, {name:"Users", to:"/users"},{name: "Products", to:"/products"}].map((item, index) => {
        return (
          <NavLink to={item.to} key={index} className="p-2 bg-orange-300 rounded-md text-white">
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Nav;
