const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["BERT", "NLP", "RAG", "LangChain", "PyTorch", "OpenCV", "EfficientNetB3", "CNN"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, CloudWatch, SNS, IAM)", "Docker", "CI/CD", "Jenkins", "Linux"]
  },
  {
    title: "Data Engineering & Databases",
    skills: ["Databricks", "Apache Spark", "Delta Lake", "MySQL", "Firebase", "PostgreSQL", "ChromaDB"]
  },
  {
    title: "Programming & Frameworks",
    skills: ["Python", "Java", "React", "FastAPI"]
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "SDLC", "Computer Networks", "REST APIs"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "n8n", "VS Code", "Google Colab"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-bold mb-24 text-white tracking-tighter">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-xl font-semibold tracking-wide text-white mb-8 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 hover:bg-white/10 hover:border-white/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
