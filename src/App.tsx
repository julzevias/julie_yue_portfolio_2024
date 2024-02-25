import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gradient-to-r from-slate-600 to-slate-800 text-white">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
