import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-primary text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
