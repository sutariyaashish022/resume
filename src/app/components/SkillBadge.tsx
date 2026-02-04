import React from 'react';

interface SkillBadgeProps {
  name: string;
  icon?: string;
  level?: number; // Kept for potential sorting/filtering, though not visually dominant
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div
      className="
        group relative flex items-center gap-2 px-4 py-2 rounded-xl
        bg-body-bg
        shadow-[5px_5px_10px_var(--shadow-outer-dark),_-5px_-5px_10px_var(--shadow-outer-light)]
        hover:shadow-[inset_3px_3px_6px_var(--shadow-inner-dark),inset_-3px_-3px_6px_var(--shadow-inner-light)]
        hover:-translate-y-0.5 active:translate-y-0
        transition-all duration-300 cursor-default select-none
      "
    >
      <i className={`bi ${icon || "bi-code-slash"} text-lg text-primary group-hover:scale-110 transition-transform duration-300`}></i>
      
      <span className="font-semibold text-xs text-text-secondary group-hover:text-body-text transition-colors">
        {name}
      </span>
    </div>
  );
}
