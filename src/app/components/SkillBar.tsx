type SkillBarProps = {
  label: string;
  level: number; // 0–100
};

export default function SkillBar({ label, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-body-text">{label}</span>
        <span className="text-text-muted font-mono">{level}%</span>
      </div>

      <div
        className="
          h-4 rounded-full overflow-hidden
          bg-body-bg
          shadow-[inset_2px_2px_5px_var(--shadow-inner-dark),inset_-2px_-2px_5px_var(--shadow-inner-light)]
        "
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
