import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between sm:px-16 px-8 py-4">
      <NavLink to="/" className="">
        Home
      </NavLink>

      <nav className="flex gap-7">
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/projects" className="">
          Projects
        </NavLink>
        <NavLink to="/contact" className="">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
