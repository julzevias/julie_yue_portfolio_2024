import { animateScroll, Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="flex justify-between text-xl  bg-slate-600 shadow-md sm:px-16 px-8 py-5 pt-6 gap-10 gap-sm-5">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => animateScroll.scrollToTop()}
      >
        Home
      </Link>

      <nav className="flex gap-10 lg:gap-20">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
