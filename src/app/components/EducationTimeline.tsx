import EducationItem from "./EducationItem";
import PencilIllustration from "./PencilIllustration";

export default function EducationTimeline() {
  return (
    <div className="relative grid grid-cols-[80px_1fr] gap-8 mt-12">
      {/* Pencil Column */}
      <div className="flex justify-center h-full">
        <PencilIllustration />
      </div>

      {/* Education Cards */}
      <div className="space-y-3 relative pb-12">
        <EducationItem
          year="Jan 2019 - May 2020"
          title="M.S. Computer Science"
          institution="California State University, East Bay"
          gpa=""
          description=""
        />

        <EducationItem
          year="Jul 2014 - Apr 2018"
          title="B.E. Computer Engineering"
          institution="Gujarat Technological University"
          gpa=""
          description=""
        />
      </div>
    </div>
  );
}
