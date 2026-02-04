import SkillSection from "../components/SkillSection";

export default function SkillsPage() {
  return (
    <div className="section-container space-y-12">
      {/* Header */}
      <header className="mb-2 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-body-text mb-4">
          Technical Skills
        </h1>
        <p className="text-text-secondary text-base md:text-md leading-relaxed">
          My technical toolbox. I treat these not just as items on a list, but as instruments to solve complex problems.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
        <SkillSection
          title="Programming Languages"
          icon="bi-code-square"
          description="Strong foundations in object-oriented and data-driven programming."
          skills={[
            { name: "Java (8-21)", level: 95, icon: "bi-cup-hot" },
            { name: "SQL", level: 90, icon: "bi-database" },
          ]}
        />

        <SkillSection
          title="Frameworks"
          icon="bi-window-desktop"
          description="Building scalable backend systems and applications."
          skills={[
            { name: "Spring Boot", level: 95, icon: "bi-gear-wide-connected" },
            { name: "Spring MVC/Batch", level: 90, icon: "bi-layers" },
            { name: "Hibernate", level: 85, icon: "bi-hdd-network" },
            { name: "Kafka", level: 85, icon: "bi-chat-dots" },
            { name: "Spark", level: 80, icon: "bi-lightning" },
          ]}
        />

        <SkillSection
          title="Cloud & DevOps"
          icon="bi-cloud"
          description="Deploying and managing applications in cloud environments."
          skills={[
            { name: "OpenShift", level: 90, icon: "bi-cloud-check" },
            { name: "Kubernetes", level: 85, icon: "bi-box" },
            { name: "AWS", level: 80, icon: "bi-amazon" },
            { name: "Jenkins", level: 85, icon: "bi-gear" },
            { name: "Docker", level: 85, icon: "bi-box-seam" },
          ]}
        />

        <SkillSection
          title="Tools"
          icon="bi-tools"
          description="Tools for development, monitoring, and code quality."
          skills={[
            { name: "Maven", level: 90, icon: "bi-hammer" },
            { name: "Datadog", level: 85, icon: "bi-activity" },
            { name: "Splunk", level: 80, icon: "bi-search" },
            { name: "Git / Bitbucket", level: 90, icon: "bi-git" },
            { name: "SonarQube", level: 85, icon: "bi-check-circle" },
            { name: "Copilot", level: 80, icon: "bi-robot" },
            { name: "Fortify", level: 80, icon: "bi-shield-lock" },
            { name: "NexusIQ", level: 80, icon: "bi-shield-check" },
          ]}
        />

        <SkillSection
          title="Databases"
          icon="bi-database-fill"
          description="Working with relational and NoSQL databases."
          skills={[
            { name: "PostgreSQL", level: 90, icon: "bi-database" },
            { name: "Oracle", level: 90, icon: "bi-database" },
            { name: "MySQL", level: 85, icon: "bi-database" },
            { name: "MongoDB", level: 80, icon: "bi-database" },
          ]}
        />
      </div>
    </div>
  );
}
