import ExperienceTimeline from "../components/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <section className="section-container">
      <h1 className="text-4xl font-bold mb-2">Timeline & Experience</h1>
      <p className="text-text-secondary text-md">
        A chronological story of growth, leadership, and technical depth - shaped through real-world problem solving, ownership, and continuous learning.
      </p>

      <ExperienceTimeline />
    </section>
  );
}
