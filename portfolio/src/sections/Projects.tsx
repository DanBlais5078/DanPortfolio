import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
    const featuredProject = useMemo(
        () => projects.find((p) => p.featured),
        []
    );

    const screenshots = featuredProject?.media.screenshots ?? [];
    const [selectedImage, setSelectedImage] = useState(screenshots[0]);

    if (!featuredProject) return null;

    return (
        <section id="projects" data-section className="max-w-7xl mx-auto px-8 py-24">

            {/* Header */}
            <div className="mb-12">
                <p className="text-blue-400 font-medium mb-2">
                    Featured Project
                </p>

                <h2 className="text-4xl font-bold">
                    {featuredProject.title}
                </h2>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">

                {/* Screenshot TOP */}
                <div className="bg-[#111827] p-4">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                        {selectedImage ? (
                            <img
                                src={selectedImage}
                                className="w-full h-full object-cover"
                                alt="screenshot"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                                No screenshot
                            </div>
                        )}
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-2 mt-4">
                        {screenshots.map((image) => (
                            <button
                                key={image}
                                onClick={() => setSelectedImage(image)}
                                className={`aspect-video rounded-md border overflow-hidden transition ${selectedImage === image
                                        ? "border-blue-500"
                                        : "border-white/10 hover:border-white/30"
                                    }`}
                            >
                                <img
                                    src={image}
                                    className="w-full h-full object-cover"
                                    alt="thumbnail"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENT BOTTOM */}
                <div className="p-8 space-y-6">

                    {/* Title */}
                    <div>
                        <h3 className="text-3xl font-bold mb-2">
                            {featuredProject.caseStudy.subtitle}
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            {featuredProject.description}
                        </p>
                    </div>

                    {/* Context */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <h4 className="text-sm text-blue-400 font-medium mb-2">
                            Context
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {featuredProject.caseStudy.context}
                        </p>
                    </div>

                    {/* Problem */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <h4 className="text-sm text-blue-400 font-medium mb-2">
                            Problem
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {featuredProject.caseStudy.problem}
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <h4 className="text-sm text-blue-400 font-medium mb-2">
                            Solution
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {featuredProject.caseStudy.solution}
                        </p>
                    </div>

                    {/* Engineering */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <h4 className="text-sm text-blue-400 font-medium mb-2">
                            Engineering Approach
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {featuredProject.caseStudy.engineering}
                        </p>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 text-gray-300">
                        {featuredProject.caseStudy.highlights?.map((item) => (
                            <li key={item}>✓ {item}</li>
                        ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                        {featuredProject.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                        {featuredProject.liveUrl && (
                            <a
                                href={featuredProject.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
                            >
                                Live Application
                            </a>
                        )}

                        {featuredProject.githubUrl && (
                            <a
                                href={featuredProject.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
                            >
                                <ExternalLink size={18} />
                                View GitHub
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}