import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-gray-600 shadow-md sm:px-16 px-8 py-5 pt-6  gap-10 gap-sm-5">
      <NavLink to="/" className="">
        Home
      </NavLink>

      <nav className="flex gap-10 lg:gap-20">
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
