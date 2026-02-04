interface EducationItemProps {
  year: string;
  title: string;
  institution: string;
  description: string;
  gpa?: string;
}

export default function EducationItem({
  year,
  title,
  institution,
  description,
  gpa,
}: EducationItemProps) {
  return (
    <div
      className="
        relative flex flex-col
        rounded-[2.5rem] p-8
        bg-body-bg
        shadow-[15px_15px_40px_var(--shadow-outer-dark),_-15px_-15px_40px_var(--shadow-outer-light)]
        hover:-translate-y-1 transition-transform duration-300
      "
    >
      {/* Year Pill */}
      <span
        className="
          self-start mb-4 px-4 py-2 rounded-full text-sm font-bold text-primary
          bg-body-bg
          shadow-[inset_3px_3px_6px_var(--shadow-inner-dark),inset_-3px_-3px_6px_var(--shadow-inner-light)]
        "
      >
        {year}
      </span>

      <h3 className="text-xl font-bold text-body-text mb-1">{title}</h3>
      <h4 className={`text-md font-semibold text-text-muted ${gpa ? "mb-2" : "mb-4"}`}>{institution}</h4>

      {gpa && (
        <div className="mb-4">
          <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-bold">
            GPA: {gpa}
          </span>
        </div>
      )}

      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}