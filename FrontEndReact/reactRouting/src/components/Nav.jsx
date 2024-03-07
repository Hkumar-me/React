import React from "react";

import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="nav sticky top-0 bg-[#00d5ff] w-full p-4 flex justify-center items-center gap-10">
      <NavLink
        to="/"
        className="bg-blue-600  p-2 text-white rounded-md cursor-pointer"
        style={(link) =>
          link.isActive
            ? { color: "tomato", fontWeight: 700 }
            : { color: "white" }
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className="bg-blue-600  p-2 text-white rounded-md cursor-pointer"
        style={(link) =>
          link.isActive
            ? { color: "tomato", fontWeight: 700 }
            : { color: "white" }
        }
      >
       Users
      </NavLink>
      <NavLink
        to="/about"
        className={(link) =>
          link.isActive
            ? [
                "bg-blue-600",
                "p-2",
                "text-[red]",
                "rounded-md",
                "cursor-pointer",
              ].join(" ")
            : "bg-blue-600  p-2 text-white rounded-md cursor-pointer"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="bg-blue-600  p-2 text-white rounded-md cursor-pointer"
      >
        {(link) => {
          return (
            <span
              className={[
                link.isActive ? "text-red-600" : "",
                link.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              Contact
            </span>
          );
        }}
      </NavLink>
    </div>
  );
}

export default Nav;
