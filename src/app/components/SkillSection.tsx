import SkillBadge from "./SkillBadge";

type Skill = {
  name: string;
  level: number;
  icon?: string;
};

type SkillSectionProps = {
  title: string;
  icon?: string;
  description?: string;
  skills: Skill[];
};

export default function SkillSection({
  title,
  icon,
  description,
  skills,
}: SkillSectionProps) {
  return (
    <section
      className="
        rounded-[2rem] p-6 h-full
        bg-body-bg
        shadow-[15px_15px_40px_var(--shadow-outer-dark),_-15px_-15px_40px_var(--shadow-outer-light)]
        hover:shadow-[20px_20px_60px_var(--shadow-outer-dark),_-20px_-20px_60px_var(--shadow-outer-light)]
        transition-shadow duration-300
      "
    >
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
          {icon && <i className={`bi ${icon} text-body-text opacity-80`}></i>}
          {title}
        </h2>
        {description && (
          <p className="text-sm text-text-secondary mt-2 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </header>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}
