const education = [
  {
    degree: "M.Tech (Integrated) Software Engineering",
    institution: "Vellore Institute of Technology, Vellore",
    duration: "2022 – Present",
    details: "CGPA: 7.84 / 10"
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "AIM Matric Higher Secondary School, Arni",
    duration: "2020 – 2022",
    details: "Grade: 92.1%"
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    year: "2026"
  },
  {
    name: "Fundamentals of AI Agents Using RAG and LangChain",
    issuer: "IBM",
    year: "2026"
  },
  {
    name: "Generative AI Bootcamp",
    issuer: "VIT",
    year: "2025"
  }
];

export default function Education() {
  return (
    <section className="relative w-full bg-background py-32 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Education Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
            Education
          </h2>
          <div className="flex flex-col gap-12">
            {education.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/20">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-[1.5px] top-2 -translate-x-1/2" />
                <p className="text-sm font-medium tracking-widest text-white/50 mb-3">{item.duration}</p>
                <h3 className="text-2xl font-semibold text-white mb-2 leading-snug">{item.degree}</h3>
                <p className="text-lg text-white/70 mb-2">{item.institution}</p>
                <p className="text-white/40 font-light">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
            Certifications
          </h2>
          <div className="flex flex-col gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-white leading-snug">{cert.name}</h3>
                  <span className="text-sm font-medium text-white/50 bg-white/10 px-3 py-1 rounded-full shrink-0">
                    {cert.year}
                  </span>
                </div>
                <p className="text-white/60">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
