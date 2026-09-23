import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project, index }) {
  return (
    <article
      style={{ "--i": index }}
      className="reveal-stagger pixel-lift group card-soft overflow-hidden"
    >
      <div className="aspect-4/3 overflow-hidden bg-line/40">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-accent mb-2">{project.category}</p>
        <h3 className="font-heading font-semibold text-lg text-ink mb-2">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-ink border border-line rounded-full px-2.5 py-1 hover:border-accent hover:text-accent transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={`/projects/${project.slug}`}
          className="group/link inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
        >
          View Case Study
          <ArrowUpRight size={16} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line">
      <div ref={ref} className="reveal reveal-stagger-group max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-ink mb-12 leading-relaxed">Selected Projects</h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
