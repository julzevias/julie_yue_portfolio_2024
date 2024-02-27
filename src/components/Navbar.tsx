import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex bg-slate-600 shadow-md sm:px-16 px-8 py-5 pt-6 gap-10 gap-sm-5 border-b border-gray-600">
      <nav className="flex gap-10 lg:gap-20">
        <Link
          activeClass="active"
          to="start"
          spy={true}
          smooth={true}
          offset={-100}
          duration={2000}
          className="cursor-pointer"
        >
          <li className="nav-link">Start</li>
        </Link>

        <Link
          activeClass="active"
          to="career"
          spy={true}
          smooth={true}
          offset={-130}
          duration={1200}
          className="nav-link cursor-pointer"
        >
          Career
        </Link>

        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-140}
          duration={1200}
          className="nav-link cursor-pointer"
        >
          Education
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          className="nav-link cursor-pointer"
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-550}
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
