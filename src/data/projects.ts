export interface Project {
  title: string;
  description: string;
  skills: string[];
  gitUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Fraud Detection Platform",
    description: "Built a fraud detection platform processing millions of daily transactions, reducing false positives by 28% (35k alerts per month). Designed real-time risk models and business rule integrations for fraud scoring. Developed internal fraud tools that improved analyst review speed by 40%.",
    skills: ["Java", "Spring Boot", "Kafka", "OpenShift", "Datadog", "PostgreSQL"],
  },
  {
    title: "Payment Module Integration",
    description: "Developed a payment module including check scanning, image extraction, and gateway integration. Unified diverse payment methods ensuring seamless compatibility with legacy systems.",
    skills: ["Java", "Payment Gateways", "Legacy Systems", "Agile"],
  },
  {
    title: "Warehouse Management System",
    description: "Built REST APIs and Spring Controllers; integrated microservices architecture for warehouse management system. Conducted unit and integration testing (JUnit) ensuring system reliability.",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "JUnit"],
  },
  {
    title: "Ticket Recommendation Application",
    description: "Created Java servlets with RESTful APIs to handle HTTP requests and responses and databases (MySQL, MongoDB) to capture event data from Ticketmaster API. Designed an interactive web page for users to search for events and purchase tickets utilizing AJAX. Implemented algorithms to improve event recommendation based on favorite record.",
    skills: ["Java", "Spring MVC", "Hibernate", "REST", "MySQL", "MongoDB", "AJAX"],
  },
  {
    title: "Baby Monitoring System",
    description: "Developed an android application using TensorFlow and neural networks. The application retrieves frames from the camera to extract features and perform object detection. If a baby is found near any sharp object or in a dangerous situation, it sends a text message to the registered person’s phone.",
    skills: ["Android", "TensorFlow", "OpenCV", "Object Detection", "YOLO", "Machine Learning"],
  },
  {
    title: "Mobile Hospital System",
    description: "Developed a system for hospital emergencies where patient history is retrieved via biometric fingerprint. Features include notifying relatives, finding the shortest path to nearest hospitals, and notifying blood banks. Built both an Android application and a website using Spring Framework and Hibernate.",
    skills: ["Java", "Spring MVC", "Hibernate", "REST", "Android", "SQL"],
  },
  {
    title: "Glimpse AI - Sports Commentary Platform",
    description: "Built real-time React + Node.js UI pipelines to display AI-generated multilingual content safely and responsively. Implemented modular UI components and optimized client–server communication for high-frequency updates. Applied performance tuning and structured error handling to maintain system reliability.",
    skills: ["React", "Node.js", "OpenAI API", "MongoDB", "WebSockets", "Swagger"],
    gitUrl: "https://github.com/rushita-vachhani/GLIMPSE.git",    
  },
  {
    title: "Comprehensive Rail Reservation System",
    description: "Developed a production-grade rail ticketing system using Oracle SQL and PL/SQL, featuring advanced booking validation, waitlist management, transactional integrity, and secure API-style access. Created multi-dimensional reporting views to analyze passenger demographics, class utilization, and weekday vs weekend demand.",
    skills: ["Oracle SQL", "PL/SQL", "Database Design", "Stored Procedures", "Exception Handling", "Data Integrity", "Analytical Views", "Secure Architecture", "Transaction Management"],
    gitUrl: "https://github.com/rushita-vachhani/damg6210-crs-project.git"
  },
  {
    title: "MiNd TuNes - Music Player Application",
    description: "Built interactive Android UI with emotion-recognition APIs to personalize user playlists in real-time. Designed efficient data flows and responsive components to improve user trust and interface experience.",
    skills: ["Android", "Kotlin", "Java", "MongoDB", "RESTful API", "Face Recognition"]
  },
];
