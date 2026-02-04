import ProjectCard from "../components/ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <div className="section-container">
      <header className="mb-2 w-full">
        <h1 className="text-4xl font-bold mb-4 text-body-text">Projects</h1>
        <p className="text-text-secondary text-md">
          A collection of applications and tools I&apos;ve built, demonstrating my journey through full-stack development and problem solving.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2 pb-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
