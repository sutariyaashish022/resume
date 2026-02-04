"use client";
import { experiences, Experience } from "../../data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative py-10 px-4 md:px-0">
      {/* Central Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-card-gradient-start to-card-gradient-end transform md:-translate-x-1/2 rounded-full opacity-30" />

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} data={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ data, index }: { data: Experience; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Spacer for desktop alignment to push content to one side */}
      <div className="hidden md:block flex-1" />

      {/* Timeline Node (Dot) */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-body-bg border-4 border-primary z-10 shadow-[0_0_10px_var(--primary)]" />

      {/* Content Card */}
      <div className={`flex-1 w-full pl-20 md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
        <div
          className="relative p-3 rounded-2xl bg-body-bg border border-card-border shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)] hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)] transition-all duration-300 group"
        >
          {/* Connector Line */}
          <div
            className={`absolute top-8 h-0.5 bg-primary opacity-50 md:w-16 w-12 ${isLeft ? "md:-right-16 right-auto -left-12 md:left-auto" : "md:-left-16 -left-12"}`}
          />

          {/* Date Pill */}
          <div className="absolute -top-4 right-6 bg-body-bg px-4 py-1 rounded-full border border-primary shadow-sm">
            <span className="text-xs font-bold text-primary tracking-wider uppercase">
              {data.period}
            </span>
          </div>

          <h3 className="text-xl font-bold text-body-text mt-2 group-hover:text-primary transition-colors">
            {data.role}
          </h3>
          <h4 className="text-md font-semibold text-text-secondary mb-3">
            {data.company}
          </h4>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-text-secondary bg-body-bg rounded-md border border-sidebar-border shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
