import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-primary text-white">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
