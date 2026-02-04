export default function LanguageCircle({
  percent,
  label,
}: {
  percent: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 rounded-full border-4 border-yellow-500 flex items-center justify-center text-sm font-bold"
      >
        {percent}%
      </div>
      <p className="text-s text-gray-600 dark:text-gray-400 mt-1">{label}</p>
    </div>
  );
}
