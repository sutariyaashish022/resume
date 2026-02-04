import EducationTimeline from "../components/EducationTimeline";

export default function EducationPage() {
  return (
    <div className="section-container space-y-12">
      {/* Header */}
      <header className="mb-2 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-body-text mb-4">
          Education
        </h1>
        <p className="text-text-secondary text-base md:text-md">
          My academic journey reflects a continuous process of learning, exploration, and applying theory to real-world software systems.
        </p>
      </header>

      {/* Timeline */}
      <EducationTimeline />
    </div>
  );
}
