export default function Education() {
    return (
      <section id="education" className="max-w-7xl mx-auto px-8 py-20">
        <div className="mb-10">
          <p className="text-blue-400 font-medium mb-2">
            Education
          </p>
  
          <h2 className="text-4xl font-bold">
            Academic Background
          </h2>
        </div>
  
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Programming Diploma */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-1">
              Computer Programming Diploma
            </h3>
  
            <p className="text-gray-400 text-sm">
              Algonquin College
            </p>
  
            <p className="text-gray-500 text-sm mt-1">
              2023 – 2025
            </p>
  
            <div className="mt-4 text-gray-300 text-sm">
              GPA: <span className="text-gray-200 font-medium">3.95 / 4.0</span>
              <span className="text-gray-500"> · Dean’s List (all terms)</span>
            </div>
          </div>
  
          {/* BA Psychology */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold mb-1">
              Bachelor of Arts – Psychology
            </h3>
  
            <p className="text-gray-400 text-sm">
              Carleton University
            </p>
  
            <p className="text-gray-500 text-sm mt-1">
              2016 – 2021
            </p>
  
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Background in behavioral science, research methods, and human cognition,
              providing a strong foundation for user-focused development.
            </p>
          </div>
  
        </div>
      </section>
    );
  }