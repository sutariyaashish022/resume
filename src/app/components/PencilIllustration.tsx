export default function PencilIllustration() {
  return (
    <div className="relative flex flex-col items-center h-full min-h-[500px]">
      {/* Graduation Cap */}
      <div className="relative -mb-4 z-10 flex flex-col items-center drop-shadow-xl">
        {/* Cap Top (Diamond) */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black dark:from-gray-700 dark:to-gray-900 transform rotate-45 rounded-lg shadow-2xl border-b-4 border-gray-900/50" />
        
        {/* Cap Base (Headband) */}
        <div className="absolute top-10 w-24 h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-md shadow-lg" />

        {/* Tassel */}
        <div className="absolute top-10 right-0 translate-x-4 w-1 h-20 bg-gradient-to-b from-accent-yellow to-yellow-700 rotate-[-15deg] origin-top shadow-sm z-20">
          <div className="absolute bottom-0 -left-1.5 w-4 h-4 bg-accent-yellow rounded-full shadow-md" />
        </div>
      </div>

      {/* Pencil Shaft */}
      <div className="w-10 flex-grow bg-gradient-to-r from-pencil-dark via-pencil-light to-pencil-dark shadow-2xl z-0" />

      {/* Pencil Tip */}
      <div className="flex flex-col items-center">
        {/* Wood Shaving */}
        <div
          className="w-0 h-0 
            border-l-[20px] border-r-[20px] border-t-[40px]
            border-l-transparent border-r-transparent
            border-t-pencil-wood filter drop-shadow-sm"
        />
        {/* Graphite Lead */}
        <div
          className="w-0 h-0 -mt-1
            border-l-[6px] border-r-[6px] border-t-[14px]
            border-l-transparent border-r-transparent
            border-t-pencil-lead"
        />
      </div>
    </div>
  );
}
