import resumeAsset from "@/assets/resume.pdf.asset.json";

export const profile = {
  name: "SK Sharukh Mukhuram",
  role: "Java Full Stack Developer",
  location: "Naidupeta, Andhra Pradesh, India",
  phone: "+91 7207521486",
  email: "shaikmukhuram@gmail.com",
  linkedin: "https://www.linkedin.com/in/shaik-mukhuram-041918300/",
  github: "https://github.com/ViratFan18",
  leetcode: "https://leetcode.com/u/kP2RNUAwlT/",
  photo: "/WhatsApp Image 2026-08-08 at 11.59.56 AM.jpeg",
  resume: resumeAsset.url,
  summary:
    "Java Full Stack Developer with hands-on experience delivering full-stack applications using Spring Boot, React and MySQL. Independently architected and shipped three production-style systems, including a multi-tenant exam allocation platform and a live rental marketplace PWA. Skilled in REST API design, JWT security and containerization — now building microservices with Redis and exploring Spring AI.",
};

const prefilled =
  "Hi Sharukh, I came across your portfolio and I'd like to talk to you about a Java Full Stack / SDE opportunity.";

export const contactActions = {
  whatsapp: `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(prefilled)}`,
  email: `mailto:${profile.email}?subject=${encodeURIComponent(
    "Opportunity for SK Sharukh Mukhuram — Java Full Stack Developer",
  )}&body=${encodeURIComponent(prefilled)}`,
  call: `tel:${profile.phone.replace(/\s/g, "")}`,
};

export const stats = [
  { value: "3+", label: "Production-style systems shipped" },
  { value: "200", label: "DSA problems solved on LeetCode" },
  { value: "8.0", label: "CGPA, B.Tech CSE (2026)" },
  { value: "100%", label: "Self-architected, end to end" },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  status: "Live" | "In development" | "Released";
  stack: string[];
  summary: string;
  highlights: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "exammaster",
    title: "ExamMaster Pro",
    subtitle: "Exam Seat Allocation System",
    status: "Live",
    stack: ["Spring Boot 3", "React", "MySQL", "Docker", "JWT (RSA)"],
    summary:
      "A full-stack multi-tenant exam seating allocation platform with branch-aware seat distribution driven by a custom Max-Heap interleaving algorithm.",
    highlights: [
      "Architected multi-tenant seat allocation with a custom Max-Heap interleaving algorithm for branch-aware distribution.",
      "Secured the platform with Spring Security and RSA-signed JWTs, enforcing role-based access control across Admin and User roles.",
      "Engineered interactive Hall and Building visualizers, CSV bulk import/export and automated PDF seat-slip generation.",
      "Containerized with Docker for consistent local development and deployment.",
    ],
    links: [{ label: "Live application", href: "https://examaster-pro-latest.onrender.com" }],
  },
  {
    id: "khet-connect",
    title: "Khet Connect",
    subtitle: "Agricultural connection platform used by farmers",
    status: "Live",
    stack: ["React", "Spring Boot", "PostgreSQL", "REST APIs"],
    summary:
      "A rural-first platform connecting farmers with local labor, built with React, Spring Boot and PostgreSQL and tuned for a production load of ~1000 users.",
    highlights: [
      "Built a React frontend and Spring Boot REST backend with PostgreSQL as the system of record.",
      "Tuned schema, indexes and connection pooling to serve a production workload of around 1000 users.",
      "Matches farmers with local labor based on crop, task and timing.",
      "Live and in real use by farmers in the region.",
    ],
    links: [{ label: "Live site", href: "https://khet-connect-3wez.vercel.app" }],
  },
  {
    id: "smart-parking",
    title: "Smart Parking & Slot Reservation System",
    subtitle: "Microservices + Redis reservation platform",
    status: "In development",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Cloud Gateway",
      "Redis",
      "PostgreSQL",
      "JWT",
      "Docker Compose",
      "React",
    ],
    summary:
      "Five independent microservices — User, Parking, Booking, Payment and Notification — behind an API Gateway, where Redis powers caching, 5-minute TTL slot holds, distributed locking, rate limiting and pub/sub notifications.",
    highlights: [
      "Five services (User, Parking, Booking, Payment, Notification) behind Spring Cloud Gateway, each owning its own PostgreSQL database.",
      "Redis TTL keys hold a selected slot for 5 minutes; if payment isn't completed, the key expires and the slot returns to the available pool.",
      "Redis distributed locks (SET NX PX) plus a database uniqueness constraint prevent two users from booking the same slot simultaneously.",
      "Redis caching of lots and available slots with explicit invalidation on slot-status change, plus per-user rate limiting returning HTTP 429.",
      "Redis Pub/Sub pushes booking, payment and slot-availability events to the Notification Service; JWT auth with BCrypt and role-based access at the gateway.",
      "Dockerfile per service with Docker Compose for Redis, PostgreSQL and all services.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/ViratFan18" }],
  },

  {
    id: "ghar-milo",
    title: "Ghar Milo",
    subtitle: "Hyperlocal rental marketplace (PWA)",
    status: "Live",
    stack: ["Firebase", "JavaScript", "PWA", "Netlify"],
    summary:
      "A zero-broker-fee rental listing PWA serving 22 neighborhood areas in Naidupeta, with phone OTP authentication.",
    highlights: [
      "Designed and shipped a zero-broker-fee rental listing PWA covering 22 neighborhood areas.",
      "Implemented phone OTP authentication via Firebase for friction-free, trustworthy sign-in.",
      "Built a Telugu/English bilingual interface to serve local, non-English-first users.",
      "Added auto-expiring 30-day listings to keep data fresh and reduce stale posts.",
    ],
    links: [{ label: "Live site", href: "https://findyourhomenow.netlify.app" }],
  },
  {
    id: "voting-system",
    title: "Voting System",
    subtitle: "With fraud detection",
    status: "Released",
    stack: ["Core Java", "OOP", "File I/O"],
    summary:
      "A core Java desktop voting application with logic to detect and flag duplicate or fraudulent votes.",
    highlights: [
      "Developed a digital voting system that detects and flags duplicate and fraudulent votes.",
      "Applied OOP principles and file/data handling to manage voter records reliably.",
      "Enforced one-vote-per-user integrity through validation at the record layer.",
    ],
    links: [
      {
        label: "Download release (.jar)",
        href: "https://github.com/ViratFan18/Voting-System-With-Fraud-Detection/releases/download/v1.0/VotingSystem.jar",
      },
    ],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security (JWT)",
      "Spring Data JPA / Hibernate",
      "REST APIs",
      "Microservices",
      "Multithreading",
      "Collections Framework",
    ],
  },
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "JavaScript"] },
  { title: "Database", items: ["MySQL", "SQL", "Firebase Realtime DB"] },
  {
    title: "DevOps / Tools",
    items: ["Docker", "Git & GitHub", "Kubernetes", "Maven"],
  },
  {
    title: "Core concepts",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "System design fundamentals", "Exception handling"],
  },
  { title: "Currently exploring", items: ["Spring AI", "AI-integrated backends"] },
  {
    title: "Professional",
    items: ["Communication", "Team collaboration", "Technical documentation", "Problem-solving"],
  },
];

export const achievements = [
  {
    value: "02",
    title: "Freelance clients",
    description: "Delivered freelance development work for two clients from requirements through completion.",
  },
  {
    value: "01",
    title: "Java quiz win",
    description: "Won a Java programming quiz by applying strong fundamentals and problem-solving skills.",
  },
  {
    value: "3rd",
    title: "Production-ready app",
    description: "Built a full production-ready application and earned third place in its competition.",
  },
  {
    value: "200+",
    title: "LeetCode problems",
    description: "Solved more than 200 LeetCode problems across data structures and algorithms.",
  },
];

export const dsaTopics = [
  { topic: "Arrays & Strings", solved: 60 },
  { topic: "Linked Lists & Stacks", solved: 40 },
  { topic: "Sorting & Searching", solved: 30 },
  { topic: "Hashing & Maps", solved: 45 },
  { topic: "Trees & Graphs", solved: 25 },
  { topic: "Dynamic Programming", solved: 0 },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institute: "NBKR Institute of Science & Technology (NBKRIST)",
  place: "Vidyanagar, Andhra Pradesh",
  graduation: "Expected June 2026",
  cgpa: "8.0",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
  ],
};
