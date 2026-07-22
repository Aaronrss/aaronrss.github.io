import type { Language } from "@/i18n";

export type LocalizedText = Record<Language, string>;

export const profile = {
  name: "Aaron Rosas",
  location: { en: "Mexico City, Mexico", es: "Ciudad de México" },
  email: "aaronrosas@proton.me",
  links: {
    github: "https://github.com/aaronrss",
    linkedin: "https://www.linkedin.com/in/aaronrosas/",
    instagram: "https://www.instagram.com/_aaronrosas_/",
    soundcloud: "https://soundcloud.com/aaron_rosas",
    mix: "https://on.soundcloud.com/avz8IpCPheya6miRHl",
  },
  role: {
    en: "Software Engineer · Backend, Cloud & Application Delivery",
    es: "Software Engineer · Backend, Cloud y Application Delivery",
  },
  summary: {
    en: "I build reliable backend systems and the delivery paths around them: automation, cloud-native operations, observability, and documentation that makes complex software easier to run.",
    es: "Construyo sistemas backend confiables y las rutas que los llevan a producción: automatización, operación cloud-native, observabilidad y documentación que vuelve comprensible el software complejo.",
  },
  skills: {
    backend: ["Java", "Spring Boot", "Python", "Bash", "SQL", "REST APIs", "Microservices", "Pentaho ETL"],
    delivery: ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD", "Linux", "Git"],
    observability: ["Splunk", "Grafana", "Prometheus", "SonarQube", "JUnit", "Mockito"],
    data: ["Oracle", "Sybase", "PostgreSQL", "MySQL", "MongoDB"],
  },
  experience: [
    {
      title: { en: "Application Delivery", es: "Application Delivery" },
      company: "Quanta",
      period: { en: "Current role", es: "Rol actual" },
      description: {
        en: "Application delivery work for the financial sector, focused on dependable software operations and controlled delivery.",
        es: "Trabajo de application delivery para el sector financiero, enfocado en operación confiable y entrega controlada de software.",
      },
    },
    {
      title: { en: "Software Engineer II — Application Delivery", es: "Software Engineer II — Application Delivery" },
      company: "JPMorgan Chase & Co.",
      period: { en: "Feb 2025 — Jul 2025", es: "Feb 2025 — Jul 2025" },
      description: {
        en: "Modernized Java and Spring Boot services for LATAM post-trade systems, supported Kubernetes deployments, renewed secure integrations, and investigated production incidents with Splunk.",
        es: "Modernicé servicios Java y Spring Boot para sistemas post-trade de LATAM, apoyé despliegues en Kubernetes, renové integraciones seguras e investigué incidentes productivos con Splunk.",
      },
    },
    {
      title: { en: "Software Engineer I — Application Delivery", es: "Software Engineer I — Application Delivery" },
      company: "JPMorgan Chase & Co.",
      period: { en: "Mar 2023 — Jan 2025", es: "Mar 2023 — Ene 2025" },
      description: {
        en: "Automated regulatory workflows with Pentaho and SQL, delivered controlled releases, and provided L2/L3 support for mission-critical financial systems.",
        es: "Automaticé flujos regulatorios con Pentaho y SQL, ejecuté releases controlados y brindé soporte L2/L3 a sistemas financieros críticos.",
      },
    },
    {
      title: { en: "Development Intern — Application Delivery", es: "Development Intern — Application Delivery" },
      company: "JPMorgan Chase & Co.",
      period: { en: "May 2022 — Feb 2023", es: "May 2022 — Feb 2023" },
      description: {
        en: "Led a Sybase-to-Oracle migration covering roughly 50 tables and more than three million records, and refactored over 30 dependent ETL jobs.",
        es: "Lideré una migración de Sybase a Oracle de cerca de 50 tablas y más de tres millones de registros, y refactoricé más de 30 procesos ETL dependientes.",
      },
    },
  ],
  education: [
    {
      title: {
        en: "B.S. in Computer Science and Technology",
        es: "Licenciatura en Tecnologías Computacionales",
      },
      institution: "Tecnológico de Monterrey (ITESM)",
      period: "2023",
    },
    {
      title: { en: "AWS Certified Cloud Practitioner", es: "AWS Certified Cloud Practitioner" },
      institution: "Amazon Web Services",
      period: "2023",
    },
  ],
  interests: {
    engineering: {
      en: "AI-assisted development, personal agents, developer tooling, automation, green software, and knowledge systems.",
      es: "Desarrollo asistido por IA, agentes personales, herramientas para developers, automatización, green software y sistemas de conocimiento.",
    },
    music: {
      en: "DJ and producer in training, LooLoo graduate and member of the looz collective. My sound moves through melodic, afro, progressive, and techno territory.",
      es: "DJ y productor en formación, graduado de LooLoo e integrante del colectivo looz. Mi sonido recorre territorios melodic, afro, progressive y techno.",
    },
  },
} as const;

export function text(value: LocalizedText, language: Language): string {
  return value[language];
}
