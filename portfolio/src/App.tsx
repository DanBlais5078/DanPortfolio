import { Toaster } from "react-hot-toast";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import OtherProjects from "./sections/OtherProjects";
import About from "./sections/About";
import Skills from "./sections/Skills"
import Education from "./sections/Education"
import Contact from "./sections/Contact";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Toaster position="top-right" />
      <Hero />
      <Projects />
      <OtherProjects />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
