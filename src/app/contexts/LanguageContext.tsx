"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.sunat": "SUNAT",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    // Hero
    "hero.title":
      "Especialista en Desarrollo de Sistemas ERP y Arquitecturas Empresariales",
    "hero.subtitle": "Profesional",
    "hero.description":
      "Hola, soy Pedro Holguín, especialista en desarrollo de software con más de 5 años de experiencia en la creación de sistemas ERP y soluciones empresariales, enfocado en la optimización de procesos y la transformación digital.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contact": "Contactar",

    // Services
    "services.title": "Servicios Profesionales",
    "services.description":
      "Soluciones tecnológicas completas para llevar tu proyecto al siguiente nivel",
    "service.web.title": "Desarrollo Web",
    "service.web.description":
      "Aplicaciones web modernas y responsivas con las últimas tecnologías",
    "service.mobile.title": "Apps Móviles",
    "service.mobile.description":
      "Aplicaciones nativas y multiplataforma para iOS y Android",
    "service.ai.title": "Integraciones IA",
    "service.ai.description":
      "Implementación de inteligencia artificial en tus productos",
    "service.cloud.title": "Cloud & DevOps",
    "service.cloud.description":
      "Infraestructura escalable y despliegue continuo",
    "service.custom.title": "Software Custom",
    "service.custom.description":
      "Desarrollo de software personalizado para tu negocio",
    "service.database.title": "Bases de Datos",
    "service.database.description":
      "Diseño e implementación de sistemas de datos robustos",
    "service.web.features":
      "React & Next.js,Angular,TypeScript,Tailwind CSS,NestJS,Python,API REST",
    "service.mobile.features":
      "React Native,Native Script,Ionic,iOS & Android,UX/UI Design",
    "service.ai.features":
      "ChatGPT API,Machine Learning,Automatización,NLP,Bots WhatsApp/Telegram/Discord",
    "service.cloud.features": "AWS & Azure,Docker,CI/CD,Kubernetes",
    "service.custom.features":
      "Backend APIs (NestJS/Python/Laravel),Microservicios (NATS, Kafka, RabbitMQ),Integraciones (SUNAT, etc),Arquitectura (Event-Driven, Microservices)",
    "service.database.features": "PostgreSQL,MongoDB,Redis,Optimización",

    // Tech Stack
    "stack.title": "Stack Tecnológico",
    "stack.description":
      "Tecnologías y herramientas que domino para crear soluciones de alta calidad",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.mobile": "Mobile",
    "stack.database": "Database",
    "stack.cloud": "Cloud",
    "stack.tools": "Tools",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.description":
      "Algunos de los proyectos que he desarrollado para clientes de diversos sectores",
    "project.features": "Características Principales",
    "project.techStack": "Stack Tecnológico",

    // SUNAT
    "sunat.title": "Facturación Electrónica SUNAT",
    "sunat.description":
      "Solución completa para la emisión de comprobantes electrónicos según normativa SUNAT",
    "sunat.feature1": "Emisión de facturas, boletas y notas electrónicas",
    "sunat.feature2": "Integración directa con SUNAT OSE",
    "sunat.feature3": "Generación automática de XML y PDF",
    "sunat.feature4": "Firma digital y validación de comprobantes",
    "sunat.feature5": "Reportes y consultas en tiempo real",
    "sunat.feature6": "Cumplimiento normativo actualizado",
    "sunat.cta": "Solicitar Demo",

    // Contact
    "contact.title": "Hablemos de tu Proyecto",
    "contact.description": "¿Tienes una idea? Hagámosla realidad juntos",
    "contact.info": "Información de Contacto",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.name": "Nombre",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.namePlaceholder": "Tu nombre",
    "contact.emailPlaceholder": "tu@email.com",
    "contact.subjectPlaceholder": "¿En qué puedo ayudarte?",
    "contact.messagePlaceholder": "Cuéntame sobre tu proyecto...",
    "contact.successMessage": "¡Gracias por contactar! Te responderé pronto.",
    "contact.validation.nameRequired": "El nombre es obligatorio",
    "contact.validation.nameMin": "El nombre debe tener al menos 2 caracteres",
    "contact.validation.emailRequired": "El correo es obligatorio",
    "contact.validation.emailInvalid": "Ingresa un correo electrónico válido",
    "contact.validation.subjectRequired": "El asunto es obligatorio",
    "contact.validation.subjectMin":
      "El asunto debe tener al menos 3 caracteres",
    "contact.validation.messageRequired": "El mensaje es obligatorio",
    "contact.validation.messageMin":
      "El mensaje debe tener al menos 10 caracteres",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.description":
      "Mi trayectoria y los proyectos que han marcado mi carrera",
    "experience.type.full-time": "Tiempo completo",
    "experience.type.freelance": "Freelance",
    "experience.exp1.badge": "Freelance",
    "experience.exp1.role": "Analista Programador Full Stack Developer",
    "experience.exp1.company": "Freelance",
    "experience.exp1.description":
      "Desarrollé e implementé solcuiones tecnológicas para empresas de diversos sectores, optimizando sus procesos y mejorando su eficiencia operativa.",
    "experience.exp1.tags":
      "Next.js, Angular, AWS, Docker, PostgreSQL, TypeScript, Python, Laravel , NestJS, MongoDB",
    "experience.exp2.badge": "Anterior",
    "experience.exp2.role": "Full Stack Developer",
    "experience.exp2.company": "Native Lab",
    "experience.exp2.description":
      "Desarrollé soluciones web integrando WordPress con Elementor para plataformas de contenido de alto tráfico. Diseñé e implementé plugins personalizados para WordPress con conectividad a APIs REST de .NET, extendiendo funcionalidades críticas del negocio. Construí interfaces de usuario modernas y escalables con Angular, mejorando la experiencia del usuario y la mantenibilidad del frontend.",
    "experience.exp2.tags": "WordPress, Elementor, Angular, .NET, REST API",
    "experience.exp3.badge": "Full Stack",
    "experience.exp3.role": "Analista Programador Full Stack",
    "experience.exp3.company": "ENGINZONE",
    "experience.exp3.description":
      "Implementé el SDK y funcionalidades para la integración de pagos con Izipay. Configuré el servidor en DigitalOcean con Ubuntu Server y preparé el entorno de desarrollo. Integré CI/CD para despliegue continuo con GitHub Actions. Desarrollé funcionalidades del CRM con PHP y CodeIgniter.",
    "experience.exp3.tags":
      "PHP, CodeIgniter, JavaScript, NestJS, TypeScript, MySQL, DigitalOcean, Ubuntu Server, GitHub Actions",
    "experience.exp4.badge": "Full Stack",
    "experience.exp4.role": "Analista Programador Full Stack",
    "experience.exp4.company": "DIRIS Lima Norte",
    "experience.exp4.description":
      "Lideré el desarrollo del backend de la plataforma de laboratorio institucional. Integré procedimientos almacenados de SQL Server para la gestión eficiente de datos clínicos. Implementé interfaces modernas y funcionales con Angular.",
    "experience.exp4.tags":
      "Java, Spring Boot, TypeScript, Angular, Docker, SQL Server, CI/CD, Git, GitHub",
    "experience.exp5.badge": "Backend",
    "experience.exp5.role": "Programador Backend",
    "experience.exp5.company": "New IP",
    "experience.exp5.description":
      "Lideré el desarrollo del backend utilizando NestJS y TypeORM. Implementé y gestioné servicios en la nube con AWS. Configuré CI/CD con GitHub Actions para el despliegue continuo del sistema.",
    "experience.exp5.tags":
      "Node.js, TypeScript, NestJS, TypeORM, AWS, Docker, SQL Server, CI/CD, Git, GitHub",
    "experience.exp6.badge": "Líder Técnico",
    "experience.exp6.role": "Líder Técnico",
    "experience.exp6.company": "GeekCorp EIRL",
    "experience.exp6.description":
      "Gestioné proyectos de desarrollo de software para clientes y dirigí el desarrollo de herramientas internas, mentoreando al equipo. Definí requisitos y especificaciones técnicas, y lideré la arquitectura y estrategia de desarrollo de software.",
    "experience.exp6.tags":
      "Node.js, TypeScript, MongoDB, React Native, Notion, Git, GitHub",
    "experience.exp7.badge": "Full Stack",
    "experience.exp7.role": "Analista Programador Full Stack",
    "experience.exp7.company": "WayTech",
    "experience.exp7.description":
      "Desarrollé herramientas internas para los proyectos de la empresa. Integré la API de Google Maps con JavaScript y Node-RED para gestionar servicios de geolocalización en tiempo real.",
    "experience.exp7.tags":
      "HTML5, JavaScript, Node-RED, Google Maps API, Git, GitHub",
    "experience.exp8.badge": "Actual",
    "experience.exp8.role": "Líder Técnico",
    "experience.exp8.company": "Marketrix",
    "experience.exp8.description":
      "Lidero el desarrollo end-to-end de productos digitales: arquitectura frontend y backend, gestión de servidores y DevOps. Dirijo y mentoreo al equipo de desarrollo, coordino sprints y seguimiento de tareas con Jira, asegurando entregas de calidad y alineadas con los objetivos del negocio.",
    "experience.exp8.tags":
      "React, Node.js, TypeScript, Docker, AWS, CI/CD, Jira, Git, GitHub",

    // Footer
    "footer.madeBy": "Desarrollado por Pedro Holguin",
    "footer.rights": "Todos los derechos reservados",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.sunat": "SUNAT",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero
    "hero.title":
      "Specialist in ERP Systems Development and Enterprise Architectures",
    "hero.subtitle": "Professional",
    "hero.description":
      "Hello, I'm Pedro Holguín, a software development specialist with over 5 years of experience in building ERP systems and enterprise solutions, focused on process optimization and digital transformation.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact",

    // Services
    "services.title": "Professional Services",
    "services.description":
      "Complete technological solutions to take your project to the next level",
    "service.web.title": "Web Development",
    "service.web.description":
      "Modern and responsive web applications with the latest technologies",
    "service.mobile.title": "Mobile Apps",
    "service.mobile.description":
      "Native and cross-platform applications for iOS and Android",
    "service.ai.title": "AI Integrations",
    "service.ai.description":
      "Artificial intelligence implementation in your products",
    "service.cloud.title": "Cloud & DevOps",
    "service.cloud.description":
      "Scalable infrastructure and continuous deployment",
    "service.custom.title": "Custom Software",
    "service.custom.description":
      "Custom software development for your business",
    "service.database.title": "Databases",
    "service.database.description":
      "Design and implementation of robust data systems",
    "service.web.features":
      "React & Next.js,Angular,TypeScript,Tailwind CSS,NestJS,Python,REST API",
    "service.mobile.features":
      "React Native,Native Script,Ionic,iOS & Android,UX/UI Design",
    "service.ai.features":
      "ChatGPT API,Machine Learning,Automation,NLP,WhatsApp/Telegram/Discord Bots",
    "service.cloud.features": "AWS & Azure,Docker,CI/CD,Kubernetes",
    "service.custom.features":
      "Backend APIs (NestJS/Python/Laravel),Microservices (NATS, Kafka, RabbitMQ),Integrations (SUNAT, etc),Architecture (Event-Driven, Microservices)",
    "service.database.features": "PostgreSQL,MongoDB,Redis,Optimization",

    // Tech Stack
    "stack.title": "Technology Stack",
    "stack.description":
      "Technologies and tools I master to create high-quality solutions",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.mobile": "Mobile",
    "stack.database": "Database",
    "stack.cloud": "Cloud",
    "stack.tools": "Tools",

    // Projects
    "projects.title": "Featured Projects",
    "projects.description":
      "Some of the projects I have developed for clients from various sectors",
    "project.features": "Main Features",
    "project.techStack": "Technology Stack",

    // SUNAT
    "sunat.title": "SUNAT Electronic Billing",
    "sunat.description":
      "Complete solution for issuing electronic receipts according to SUNAT regulations",
    "sunat.feature1": "Issuance of electronic invoices, receipts and notes",
    "sunat.feature2": "Direct integration with SUNAT OSE",
    "sunat.feature3": "Automatic generation of XML and PDF",
    "sunat.feature4": "Digital signature and receipt validation",
    "sunat.feature5": "Real-time reports and queries",
    "sunat.feature6": "Updated regulatory compliance",
    "sunat.cta": "Request Demo",

    // Contact
    "contact.title": "Let's Talk About Your Project",
    "contact.description": "Have an idea? Let's make it happen together",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.subjectPlaceholder": "How can I help you?",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.successMessage":
      "Thank you for reaching out! I'll get back to you soon.",
    "contact.validation.nameRequired": "Name is required",
    "contact.validation.nameMin": "Name must be at least 2 characters",
    "contact.validation.emailRequired": "Email is required",
    "contact.validation.emailInvalid": "Enter a valid email address",
    "contact.validation.subjectRequired": "Subject is required",
    "contact.validation.subjectMin": "Subject must be at least 3 characters",
    "contact.validation.messageRequired": "Message is required",
    "contact.validation.messageMin": "Message must be at least 10 characters",

    // Experience
    "experience.title": "Professional Experience",
    "experience.description":
      "My journey and the projects that have shaped my career",
    "experience.type.full-time": "Full-time",
    "experience.type.freelance": "Freelance",
    "experience.exp1.badge": "Freelance",
    "experience.exp1.role": "Full Stack Developer Analyst",
    "experience.exp1.company": "Freelance",
    "experience.exp1.description":
      "Developed and implemented technological solutions for companies across various industries, optimizing their processes and improving operational efficiency.",
    "experience.exp1.tags":
      "Next.js, Angular, AWS, Docker, PostgreSQL, TypeScript, Python, Laravel, NestJS, MongoDB",
    "experience.exp2.badge": "Previous",
    "experience.exp2.role": "Full Stack Developer",
    "experience.exp2.company": "Native Lab",
    "experience.exp2.description":
      "Led the development of web solutions integrating WordPress with Elementor for high-traffic content platforms. Designed and implemented custom WordPress plugins with connectivity to .NET REST APIs, extending critical business functionalities. Built modern and scalable user interfaces with Angular, improving user experience and frontend maintainability.",
    "experience.exp2.tags": "WordPress, Elementor, Angular, .NET, REST API",
    "experience.exp3.badge": "Full Stack",
    "experience.exp3.role": "Full Stack Developer Analyst",
    "experience.exp3.company": "ENGINZONE",
    "experience.exp3.description":
      "Implemented the SDK and payment integration features with Izipay. Configured the DigitalOcean server with Ubuntu Server and set up the development environment. Integrated CI/CD for continuous deployment using GitHub Actions. Developed CRM functionalities using PHP and CodeIgniter.",
    "experience.exp3.tags":
      "PHP, CodeIgniter, JavaScript, NestJS, TypeScript, MySQL, DigitalOcean, Ubuntu Server, GitHub Actions",
    "experience.exp4.badge": "Full Stack",
    "experience.exp4.role": "Full Stack Developer Analyst",
    "experience.exp4.company": "DIRIS Lima Norte",
    "experience.exp4.description":
      "Led backend development for the institutional laboratory platform. Integrated SQL Server stored procedures for efficient clinical data management. Implemented modern and functional user interfaces with Angular.",
    "experience.exp4.tags":
      "Java, Spring Boot, TypeScript, Angular, Docker, SQL Server, CI/CD, Git, GitHub",
    "experience.exp5.badge": "Backend",
    "experience.exp5.role": "Backend Developer",
    "experience.exp5.company": "New IP",
    "experience.exp5.description":
      "Led backend development using NestJS and TypeORM. Implemented and managed cloud services on AWS. Set up CI/CD pipelines with GitHub Actions for continuous deployment.",
    "experience.exp5.tags":
      "Node.js, TypeScript, NestJS, TypeORM, AWS, Docker, SQL Server, CI/CD, Git, GitHub",
    "experience.exp6.badge": "Tech Lead",
    "experience.exp6.role": "Technical Lead",
    "experience.exp6.company": "GeekCorp EIRL",
    "experience.exp6.description":
      "Managed software development projects for clients and led the development of internal tools, mentoring the team. Defined technical requirements and specifications, and led the software architecture and development strategy.",
    "experience.exp6.tags":
      "Node.js, TypeScript, MongoDB, React Native, Notion, Git, GitHub",
    "experience.exp7.badge": "Full Stack",
    "experience.exp7.role": "Full Stack Developer Analyst",
    "experience.exp7.company": "WayTech",
    "experience.exp7.description":
      "Developed internal tools for company projects. Integrated the Google Maps API using JavaScript and Node-RED to manage real-time geolocation services.",
    "experience.exp7.tags":
      "HTML5, JavaScript, Node-RED, Google Maps API, Git, GitHub",
    "experience.exp8.badge": "Current",
    "experience.exp8.role": "Technical Lead",
    "experience.exp8.company": "Marketrix S.A.C",
    "experience.exp8.description":
      "Leading end-to-end development of digital products: frontend and backend architecture, server management and DevOps. Mentoring the development team, coordinating sprints and task tracking with Jira, ensuring quality deliveries aligned with business goals.",
    "experience.exp8.tags":
      "React, Node.js, TypeScript, Docker, AWS, CI/CD, Jira, Git, GitHub",

    // Footer
    "footer.madeBy": "Developed by Pedro Holguin",
    "footer.rights": "All rights reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
