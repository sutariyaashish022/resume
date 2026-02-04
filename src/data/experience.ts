export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Citizens Bank (Infosys Ltd., USA)",
    period: "Jul 2021 - Present",
    description:
      "Built fraud detection platform processing millions of daily transactions, reducing false positives by 28%. Designed real-time risk models and business rule integrations. Developed internal fraud tools improving analyst review speed by 40%. Prototyped GenAI-based rule generation. Enhanced system scalability through microservices architecture. Automated JUnit test creation via GitHub Copilot.",
    skills: ["Java", "Spring Boot", "OpenShift", "Kafka", "Datadog", "GenAI"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "EPAM Systems (USA)",
    period: "Jan 2021 - Jun 2021",
    description:
      "Developed payment module including check scanning, image extraction, and gateway integration. Unified diverse payment methods ensuring seamless compatibility with legacy systems. Supported agile development cycles.",
    skills: ["Java", "Payment Integration", "Agile", "Legacy Systems"],
  },
  {
    id: 3,
    role: "Computer Science Tutor",
    company: "CSU East Bay, Hayward, CA",
    period: "Jan 2020 - May 2020",
    description:
      "As a computer tutor, my role is to help student improve their knowledge in computer science. I usually help student with their difficulties in variety of courses which includes theory knowledge as well as programming knowledge.",
    skills: ["Tutoring", "Computer Science", "Mentoring"],
  },
  {
    id: 4,
    role: "Java Developer",
    company: "Parita CNC Machines (India)",
    period: "May 2017 - Dec 2018",
    description:
      "Built REST APIs and Spring Controllers; integrated microservices architecture for warehouse management system. Conducted unit and integration testing (JUnit) ensuring system reliability.",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "JUnit"],
  },
];
