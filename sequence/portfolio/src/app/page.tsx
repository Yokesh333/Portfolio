import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background relative selection:bg-white/30 selection:text-white">
      <Navbar />
      
      {/* 
        The ScrollyCanvas provides a 500vh scrollable area, 
        and the Overlay tracks this space to fade in/out text.
      */}
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
    </main>
  );
}
