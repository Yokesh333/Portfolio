

export default function About() {
  return (
    <section id="about" className="relative w-full bg-background pt-32 pb-16 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white/50 mb-12">
          About Me
        </h2>
        
        <div className="flex flex-col gap-8 leading-[1.15] tracking-tight">
          <p className="text-[clamp(1.8rem,3vw,3.5rem)] font-semibold text-white/90">
            I am a final-year M.Tech Integrated Software Engineering student driven by a passion for <span className="text-white">problem solving and systems architecture</span>.
          </p>
          <p className="text-[clamp(1.2rem,2vw,2rem)] text-white/40 font-medium leading-[1.35]">
            I specialize in building scalable, secure, and <span className="text-white/70">AI-driven software solutions</span>, leveraging modern NLP frameworks, cloud infrastructure, and robust data engineering.
          </p>
        </div>

        <div className="mt-16">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition-colors tracking-widest uppercase border border-white/20"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
