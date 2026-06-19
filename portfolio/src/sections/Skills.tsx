export default function Skills() {
    return (
      <section id="skills" data-section className="max-w-7xl mx-auto px-8 py-24">
  
        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            Skills
          </p>
  
          <h2 className="text-4xl font-bold">
            Technologies Stack
          </h2>
  
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            A focused set of technologies I use to build full-stack applications,
            secure backend systems, and production-ready web platforms.
          </p>
        </div>
  
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
          {/* Frontend */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-4">
              Frontend
            </h3>
  
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Vite", "Tailwind CSS", "Bootstrap"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Backend */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-4">
              Backend
            </h3>
  
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT Authentication",
                "Bcrypt",
                "SQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Tools */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-4">
              Tools & Deployment
            </h3>
  
            <div className="flex flex-wrap gap-2">
              {["Git", "Postman", "Vercel", "MySQL Workbench"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Concepts */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2 lg:col-span-3">
  
            <h3 className="text-lg font-semibold mb-4">
              Architecture Concepts
            </h3>
  
            <div className="flex flex-wrap gap-2">
              {[
                "MVC Architecture",
                "CRUD Systems",
                "Repository Pattern",
                "Agile Development",
                "Component-Based UI Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
  
            <p className="text-gray-400 text-sm mt-4 max-w-2xl">
              Focused on building structured full-stack systems with clean separation
              between frontend, backend, and data layers, using real-world development practices.
            </p>
          </div>
  
        </div>
      </section>
    );
  }