export default function Skills() {
    return (
      <section id="skills" data-section className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            Skills
          </p>
  
          <h2 className="text-4xl font-bold">
            Technologies & Tools
          </h2>
  
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            A focused set of technologies I use to build full-stack applications,
            developer tools, and production-ready systems.
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
              {["React", "TypeScript", "Vite", "Tailwind CSS"].map((skill) => (
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
              {["Node.js", "Express", "SQLite", "REST APIs"].map((skill) => (
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
              Tools & Workflow
            </h3>
  
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Docker", "Postman"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Architecture (important for you) */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">
              Architecture & Concepts
            </h3>
  
            <div className="flex flex-wrap gap-2">
              {["MVC", "ECS", "Component-Based Design", "REST Architecture"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
  
            <p className="text-gray-400 text-sm mt-4 max-w-2xl">
              Focused on building structured systems rather than just UI features,
              with emphasis on maintainability and separation of concerns.
            </p>
          </div>
  
        </div>
      </section>
    );
  }