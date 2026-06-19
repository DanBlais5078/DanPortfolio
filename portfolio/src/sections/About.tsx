import { Layers, Briefcase, Cpu, GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section id="about" data-section className="max-w-7xl mx-auto px-8 py-24">

            {/* Header */}
            <div className="mb-12">
                <p className="text-blue-400 font-medium mb-2">
                    About
                </p>

                <h2 className="text-4xl font-bold">
                    Full-stack developer focused on building production-ready software
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                    I’m a full-stack developer who builds and deploys real-world applications
                    using React, TypeScript, Node.js, and SQL. I focus on clean architecture,
                    maintainable systems, and shipping software that works in production.
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Layers className="text-blue-400" size={20} />
                        <h3 className="text-lg font-semibold">
                            What I build
                        </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Full-stack web applications using React, TypeScript, and Node.js.
                        I focus on building real systems with authentication, APIs, and
                        structured backend architecture designed to be secure and user-friendly.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="text-blue-400" size={20} />
                        <h3 className="text-lg font-semibold">
                            Real-world experience
                        </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Delivered a production client application featuring authentication,
                        inventory management, and admin workflows. Worked through requirements,
                        iterative development, and deployment in a production client environment.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Cpu className="text-blue-400" size={20} />
                        <h3 className="text-lg font-semibold">
                            Engineering mindset
                        </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        I prioritize clean architecture, separation of concerns, and maintainable
                        code. I enjoy structuring APIs, database models, and backend logic to
                        create predictable and scalable systems.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
                    <div className="flex items-center gap-3 mb-3">
                        <GraduationCap className="text-blue-400" size={20} />
                        <h3 className="text-lg font-semibold">
                            Education
                        </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Computer Programming Diploma (3.95 GPA, Dean’s List) and a background
                        in Psychology, which strengthens my understanding of usability and user behavior.
                    </p>
                </div>

            </div>
        </section>
    );
}