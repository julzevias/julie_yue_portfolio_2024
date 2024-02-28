import { Link } from "react-scroll";
import logo from "/julz-logo.png";

const Navbar = () => {
  return (
    <header className="flex  justify-between items-center fixed top-0 left-0 w-full z-50 fle shadow-md sm:px-16 px-8 py-4 pt-6 gap-10 gap-sm-5 transition-all duration-500 hover:bg-slate-600 border-b border-gray-600 bg-slate-600 lg:bg-transparent">
      <div className="flex items-center">
        <img
          src={logo}
          className="border-2 border-white object-cover opacity-80 hover:opacity-100 teardrop-border w-8 h-8 lg:w-10 lg:h-10"
        ></img>
      </div>
      <nav className="flex gap-10 lg:gap-20">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1400}
          className="cursor-pointer"
        >
          <li className="nav-link">About</li>
        </Link>

        {/* <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-140}
          duration={1200}
          className="nav-link cursor-pointer"
        >
          Education
        </Link> */}

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1200}
          className="nav-link cursor-pointer"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="career"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1200}
          className="nav-link cursor-pointer"
        >
          Career
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1200}
          className="nav-link cursor-pointer"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
