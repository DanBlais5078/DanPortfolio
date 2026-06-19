export default function Hero() {
    return (
        <section id="hero" className="min-h-[85vh] flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text */}
                    <div className="max-w-3xl">
                        <p className="text-blue-400 font-medium mb-4">
                            Full-Stack Developer
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Building modern web applications with React and Node.js
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            I design and develop full-stack applications using React,
                            TypeScript, Node.js, Express, and SQL. My work includes
                            production systems, secure authentication, REST APIs, and
                            business-focused software solutions.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {[
                                "React",
                                "TypeScript",
                                "Node.js",
                                "Express",
                                "SQL",
                                "Tailwind CSS",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-medium"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* subtle glow */}
                            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}