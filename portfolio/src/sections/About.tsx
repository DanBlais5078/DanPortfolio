export default function About() {
    return (
      <section id="about" data-section className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            About
          </p>
  
          <h2 className="text-4xl font-bold">
            Full-stack developer focused on building real-world software
          </h2>
  
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            I’m a recent Computer Programming graduate who enjoys building
            production-ready applications, with a focus on clean architecture,
            usability, and maintainable systems.
          </p>
        </div>
  
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
  
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-3">
              What I build
            </h3>
  
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack web applications using React, TypeScript, and Node.js.
              I focus on building systems that are structured, scalable, and
              ready for real users — not just demo projects.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-3">
              Real-world experience
            </h3>
  
            <p className="text-gray-400 text-sm leading-relaxed">
              Built and deployed a production client application with authentication,
              inventory management, and admin workflows, working through structured
              requirements and iterative development.
            </p>
          </div>
  
          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-3">
              Engineering mindset
            </h3>
  
            <p className="text-gray-400 text-sm leading-relaxed">
              I prioritize clean architecture, separation of concerns, and maintainable
              code. I enjoy working with systems like MVC and ECS and thinking beyond
              just UI implementation.
            </p>
          </div>
  
          {/* Card 4 */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-3">
              Education
            </h3>
  
            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Programming Diploma (3.95 GPA, Dean’s List) and a background
              in Psychology, which helps me design with user behavior and usability
              in mind.
            </p>
          </div>
  
        </div>
      </section>
    );
  }