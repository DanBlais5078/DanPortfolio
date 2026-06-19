import { projects } from "../data/projects";
import { Code, TvMinimalPlay } from "lucide-react";

export default function OtherProjects() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="other-projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="mb-12">
        <p className="text-blue-400 font-medium mb-2">
          Additional Projects
        </p>

        <h2 className="text-4xl font-bold">
          Other Work
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {otherProjects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition"
          >
            {/* MEDIA AREA (GIF / IMAGE) */}
            {project.media.gif && (
              <div className="aspect-video bg-black/30">
                <img
                  src={project.media.gif}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* link */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
                >
                    <TvMinimalPlay size={18}/>
                  Live App
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
              >
                <Code size={18}/>
                  Github
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}