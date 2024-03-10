import { useState, useEffect } from "react";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "./sections/Footer";
import WorkTimeline from "./sections/WorkTimeline";
import { CSSTransition } from "react-transition-group";

function App() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col bg-gradient-to-r from-slate-600 to-slate-800 text-white z-auto">
      <CSSTransition in={inProp} timeout={600} classNames="item" unmountOnExit>
        <div>
          <Navbar />
          <About />
          <Projects />
          <WorkTimeline />
          <Contact />
          <Footer />
        </div>
      </CSSTransition>
    </main>
  );
}

export default App;
