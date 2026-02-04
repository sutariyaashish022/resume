import { Project } from "@/data/projects";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="
        flex flex-col h-full
        rounded-[2.5rem] p-8
        bg-body-bg
        border border-card-border
        shadow-[15px_15px_40px_var(--shadow-outer-dark),_-15px_-15px_40px_var(--shadow-outer-light)]
        transition-transform duration-300 hover:-translate-y-2
      "
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-sm text-justify">
          {project.description}
        </p>
      </div>

      {/* Skills - Inset Look */}
      <div className="mt-auto">
        <div
          className="
            flex flex-wrap gap-2 p-4 rounded-2xl mb-6
            bg-body-bg
            shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
          "
        >
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-semibold text-text-muted px-2 py-1"
            >
              #{skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {project.gitUrl && (
            <Link
              href={project.gitUrl}
              target="_blank"
              className="
                flex items-center justify-center w-12 h-12 rounded-full
                text-text-secondary hover:text-primary transition-colors
                bg-body-bg
                shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)]
                active:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
              "
              title="View Source Code"
            >
              <i className="bi bi-github text-xl"></i>
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              className="
                px-6 py-3 rounded-full font-semibold text-sm text-body-text
                bg-body-bg
                shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)]
                active:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
                hover:text-primary transition-colors
              "
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
