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
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0b0f19",
            color: "#e5e7eb",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "12px 14px",
            borderRadius: "12px",
            fontSize: "14px",
          },

          success: {
            style: {
              border: "1px solid rgba(34,197,94,0.25)",
            },
            iconTheme: {
              primary: "#22c55e",
              secondary: "#0b0f19",
            },
          },

          error: {
            style: {
              border: "1px solid rgba(239,68,68,0.25)",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#0b0f19",
            },
          },

          loading: {
            style: {
              border: "1px solid rgba(59,130,246,0.25)",
            },
            iconTheme: {
              primary: "#3b82f6",
              secondary: "#0b0f19",
            },
          },
        }}
      />
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
