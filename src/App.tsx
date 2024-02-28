import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "./sections/Footer";
import WorkTimeline from "./sections/WorkTimeline";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gradient-to-r from-slate-600 to-slate-800 text-white z-auto">
      <Navbar />
      <About />
      <Projects />
      <WorkTimeline />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
