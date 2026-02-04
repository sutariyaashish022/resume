import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="section-container">

      {/* HERO HEADER */}
      <div
        className="
          rounded-[2.5rem] p-6 md:p-10
          bg-body-bg
          shadow-[20px_20px_60px_var(--shadow-outer-dark),_-20px_-20px_60px_var(--shadow-outer-light)]
          flex flex-col md:flex-row justify-between items-center
        "
      >
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-body-text">
            Hi, I’m <span className="text-primary">Ashish Sutariya</span>
          </h1>

          <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed">
            Senior Java Developer with 5+ years of experience building scalable, high-performance backend systems in fintech and banking.
          </p>

          <Link
            href="/experience"
            className="mt-8 px-8 py-4 rounded-full font-bold text-primary
              bg-body-bg
              shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)]
              hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
              active:scale-95 transition-all duration-300 inline-block
            "
          >
            My Experience
          </Link>
        </div>
      </div>

      {/* METRICS */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 mb-16">
        <Metric title="Years of Experience" value="5+" />
        <Metric title="Academic & Industry Projects" value="10+" />
        <Metric title="Technologies Used" value="15+" />
      </div>

      {/* SERVICES / FOCUS AREAS */}
      <h2 className="text-2xl font-bold mt-12 mb-8 text-body-text">
        What I Work On
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        <ServiceCard
          title="Backend Development"
          description="Building scalable backend systems using Java, Spring Boot, Spring MVC/Batch, Hibernate, and REST APIs."
        />
        <ServiceCard
          title="Cloud & DevOps"
          description="Experience with OpenShift, Kubernetes, AWS, Jenkins, Docker, and CI/CD pipelines."
        />
        <ServiceCard
          title="Data & Databases"
          description="Working with PostgreSQL, Oracle, MySQL, MongoDB, Kafka, and Spark for data processing and storage."
        />
        <ServiceCard
          title="Monitoring & Security"
          description="Implementing monitoring with Datadog, Splunk, and ensuring security with Fortify and SonarQube."
        />
        <ServiceCard
          title="System Architecture"
          description="Designing microservices architectures, asynchronous processing, and high-performance transaction pipelines."
        />
        <ServiceCard
          title="Agile & Collaboration"
          description="Working in agile environments, conducting code reviews, and collaborating with cross-functional teams."
        />
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="text-center">
      <div
        className="
          w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center
          bg-body-bg
          shadow-[inset_5px_5px_10px_var(--shadow-inner-dark),inset_-5px_-5px_10px_var(--shadow-inner-light)]
        "
      >
        <h3 className="text-2xl md:text-3xl font-bold text-primary">{value}</h3>
      </div>
      <p className="text-text-secondary text-sm font-medium">{title}</p>
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-[2rem] p-8
        bg-body-bg
        shadow-[10px_10px_20px_var(--shadow-outer-dark),_-10px_-10px_20px_var(--shadow-outer-light)]
        hover:-translate-y-2 transition-transform duration-300
      "
    >
      <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
