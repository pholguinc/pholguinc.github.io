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
    "service.custom.title": "Software a medida",
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
    "project.p1.title": "Aplicación de Notificaciones con WebSockets",
    "project.p1.description": "Aplicación de Notificaciones que permite a los usuarios recibir notificaciones en tiempo real.",
    "project.p1.fullDescription": "Aplicación de Notificaciones que permite a los usuarios recibir notificaciones en tiempo real. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    "project.p1.features": "Notificaciones en tiempo real con WebSockets,Sistema de autenticación y autorización de usuarios,Panel de administración para gestionar notificaciones,API RESTful con documentación Swagger",
    "project.p2.title": "Sistema de Gestión de Restaurantes",
    "project.p2.description": "Sistema de Gestión de Restaurantes que permite a los usuarios gestionar pedidos, mesas, clientes y ventas.",
    "project.p2.fullDescription": "Sistema de Gestión de Restaurantes que permite a los usuarios gestionar pedidos, mesas, clientes y ventas. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    "project.p2.features": "Gestión de Categorías,Gestión de Productos,Gestión de pedidos,Gestión de mesas,Gestión de usuarios,Gestión de ventas",
    "project.p3.title": "Sistema de Almacén e Inventario",
    "project.p3.description": "Sistema de Almacén e Inventario que permite a los usuarios gestionar productos, categorías, usuarios y ventas.",
    "project.p3.fullDescription": "Sistema de Almacén e Inventario que permite a los usuarios gestionar productos, categorías, usuarios y ventas. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    "project.p3.features": "Gestión de Categorías,Gestión de Productos,Gestión de pedidos,Gestión de mesas,Gestión de usuarios,Gestión de ventas",
    "project.p4.title": "App Móvil de gestión de asistencia con QR",
    "project.p4.description": "App Móvil de gestión de asistencia con QR que permite a los usuarios gestionar la asistencia con códigos QR.",
    "project.p4.fullDescription": "App Móvil de gestión de asistencia con QR que permite a los usuarios gestionar la asistencia con códigos QR. Incluye almacenamiento local con SQLite, generación de QR único por usuario y reportes detallados.",
    "project.p4.features": "Escaneo de códigos QR para registro de asistencia,Generación de QR único por estudiante o empleado,Almacenamiento local con SQLite sin necesidad de internet,Reportes de asistencia por fecha, usuario o grupo",
    "project.p5.title": "API para consulta RUC SUNAT",
    "project.p5.description": "API para consulta RUC SUNAT que permite a los usuarios consultar información de empresas registradas en la SUNAT.",
    "project.p5.fullDescription": "API para consulta RUC SUNAT que permite a los usuarios consultar información de empresas registradas en la SUNAT. Incluye consultas de RUC, DNI y validación de comprobantes.",
    "project.p5.features": "Consulta de RUC SUNAT,Consulta de DNI,Consulta de información de empresas registradas en la SUNAT,Consulta de información de personas registradas en la RENIEC",
    "project.p6.title": "Automatización de proyectos NestJS",
    "project.p6.description": "Automatización de proyectos NestJS que permite a los usuarios automatizar la creación de proyectos NestJS.",
    "project.p6.fullDescription": "Automatización de proyectos NestJS que permite a los usuarios automatizar la creación de estructura de carpetas con NestJS.",
    "project.p6.features": "Creación de features con Arquitectura bajo Capas,Creación de features con Arquitectura Hexagonal,Creación de features para Microservicios",
    "project.p7.title": "APP PWA de Viajes Turísticos para Colombia con IA",
    "project.p7.description": "APP PWA de Viajes Turísticos para Colombia con IA que permite a los usuarios visualizar recomendaciones para su viaje mediante sus preferencias.",
    "project.p7.fullDescription": "APP PWA de Viajes Turísticos para Colombia con IA que permite a los usuarios visualizar recomendaciones para su viaje mediante sus preferencias. Incluye sistema de recomendaciones con IA, procesamiento de preferencias y rutas turísticas personalizadas.",
    "project.p7.features": "Recomendaciones de viaje con IA,Rutas turísticas personalizadas,Integración con servicios de mapas,Sistema de preferencias de usuario",
    "project.p8.title": "Librería para generar esquemas para facturación electrónica SUNAT",
    "project.p8.description": "Librería para generar esquemas para facturación electrónica SUNAT que permite a los usuarios generar esquemas para facturación electrónica SUNAT.",
    "project.p8.fullDescription": "Librería para generar esquemas para facturación electrónica SUNAT que permite a los usuarios generar esquemas para facturación electrónica SUNAT cumpliendo la normativa de SUNAT y UBL 2.1 para la generación de las interfaces en Typescript.",
    "project.p8.features": "Generación de interfaces TypeScript desde XSD,Cumplimiento normativa UBL 2.1,Validación de esquemas SUNAT,Soporte para facturas, boletas y notas",
    "project.p9.title": "App Móvil para Gestión de Soporte Técnico",
    "project.p9.description": "Aplicación Android para registrar, asignar y dar seguimiento a tickets de soporte técnico desde dispositivos móviles.",
    "project.p9.fullDescription": "Aplicación Android nativa para la gestión integral de soporte técnico. Permite a los técnicos recibir y atender tickets en campo, registrar el historial de intervenciones, adjuntar evidencias fotográficas y actualizar el estado de cada incidencia en tiempo real desde su dispositivo móvil.",
    "project.p9.features": "Creación y asignación de tickets de soporte técnico,Seguimiento del estado de incidencias en tiempo real,Registro fotográfico de evidencias por ticket,Historial de intervenciones por equipo o usuario",
    "project.p10.title": "Landing Page para Instituciones Educativas",
    "project.p10.description": "Landing page interactiva y moderna diseñada para colegios, institutos y universidades, enfocada en la captación de estudiantes y la presentación de la propuesta educativa.",
    "project.p10.fullDescription": "Landing page de alto rendimiento diseñada específicamente para el sector educativo. Incluye secciones dinámicas para la presentación de programas académicos, galería interactiva de infraestructura, testimonios de estudiantes y padres, y un formulario inteligente de pre-admisión optimizado para maximizar la captación de leads escolares.",
    "project.p10.features": "Diseño moderno y responsivo optimizado para conversiones,Formulario de pre-admisiones con validación en tiempo real,Sección autoadministrable de oferta académica y planes de estudio,Integración de testimonios dinámicos y galería fotográfica",

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
    "sunat.invoice.type": "FACTURA ELECTRÓNICA",
    "sunat.invoice.status": "ACEPTADO",
    "sunat.invoice.signed": "Firmado digitalmente • Enviado a SUNAT",

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
    "project.p1.title": "WebSocket Notifications Application",
    "project.p1.description": "Notifications application that allows users to receive real-time notifications.",
    "project.p1.fullDescription": "Notifications application that allows users to receive real-time notifications. Includes a real-time notifications system, secure payment processing, advanced admin panel, real-time inventory management, and detailed sales analytics.",
    "project.p1.features": "Real-time notifications with WebSockets,User authentication and authorization system,Admin panel for managing notifications,RESTful API with Swagger documentation",
    "project.p2.title": "Restaurant Management System",
    "project.p2.description": "Restaurant Management System that allows users to manage orders, tables, customers and sales.",
    "project.p2.fullDescription": "Restaurant Management System that allows users to manage orders, tables, customers and sales. Includes a real-time notifications system, secure payment processing, advanced admin panel, real-time inventory management, and detailed sales analytics.",
    "project.p2.features": "Category Management,Product Management,Order Management,Table Management,User Management,Sales Management",
    "project.p3.title": "Warehouse and Inventory System",
    "project.p3.description": "Warehouse and Inventory System that allows users to manage products, categories, users and sales.",
    "project.p3.fullDescription": "Warehouse and Inventory System that allows users to manage products, categories, users and sales. Includes a real-time notifications system, secure payment processing, advanced admin panel, real-time inventory management, and detailed sales analytics.",
    "project.p3.features": "Category Management,Product Management,Order Management,Table Management,User Management,Sales Management",
    "project.p4.title": "Mobile App for QR Attendance Management",
    "project.p4.description": "Mobile App for QR Attendance Management that allows users to manage attendance with QR codes.",
    "project.p4.fullDescription": "Mobile App for QR Attendance Management that allows users to manage attendance with QR codes. Includes local SQLite storage, unique QR generation per user and detailed reports.",
    "project.p4.features": "QR code scanning for attendance registration,Unique QR generation per student or employee,Local storage with SQLite without internet requirement,Attendance reports by date, user or group",
    "project.p5.title": "API for SUNAT RUC Query",
    "project.p5.description": "API for SUNAT RUC Query that allows users to query information about companies registered in SUNAT.",
    "project.p5.fullDescription": "API for SUNAT RUC Query that allows users to query information about companies registered in SUNAT. Includes RUC and DNI queries and receipt validation.",
    "project.p5.features": "SUNAT RUC Query,DNI Query,Query of companies registered in SUNAT,Query of people registered in RENIEC",
    "project.p6.title": "NestJS Project Automation",
    "project.p6.description": "NestJS Project Automation that allows users to automate the creation of NestJS projects.",
    "project.p6.fullDescription": "NestJS Project Automation that allows users to automate the creation of folder structure with NestJS.",
    "project.p6.features": "Feature creation with Layered Architecture,Feature creation with Hexagonal Architecture,Feature creation for Microservices",
    "project.p7.title": "Colombia Tourism Travel PWA App with AI",
    "project.p7.description": "Colombia Tourism Travel PWA App with AI that allows users to view travel recommendations based on their preferences.",
    "project.p7.fullDescription": "Colombia Tourism Travel PWA App with AI that allows users to view travel recommendations based on their preferences. Includes AI-powered recommendations, preference processing and personalized tourist routes.",
    "project.p7.features": "AI-powered travel recommendations,Personalized tourist routes,Maps service integration,User preference system",
    "project.p8.title": "Library for generating SUNAT electronic billing schemas",
    "project.p8.description": "Library for generating SUNAT electronic billing schemas that allows users to generate schemas for SUNAT electronic billing.",
    "project.p8.fullDescription": "Library for generating SUNAT electronic billing schemas that allows users to generate schemas complying with SUNAT and UBL 2.1 regulations for generating TypeScript interfaces.",
    "project.p8.features": "TypeScript interface generation from XSD,UBL 2.1 compliance,SUNAT schema validation,Support for invoices, receipts and notes",
    "project.p9.title": "Mobile App for Technical Support Management",
    "project.p9.description": "Android application to register, assign and track technical support tickets from mobile devices.",
    "project.p9.fullDescription": "Native Android application for comprehensive technical support management. Allows technicians to receive and handle tickets in the field, record intervention history, attach photographic evidence and update the status of each incident in real time from their mobile device.",
    "project.p9.features": "Creation and assignment of technical support tickets,Real-time incident status tracking,Photographic evidence recording per ticket,Intervention history by equipment or user",
    "project.p10.title": "Landing Page for Educational Institutions",
    "project.p10.description": "Interactive and modern landing page designed for schools, institutes, and universities, focused on student recruitment and academic presentation.",
    "project.p10.fullDescription": "High-performance landing page specifically crafted for the educational sector. It features dynamic sections for academic program showcases, an interactive infrastructure gallery, student and parent testimonials, and an intelligent pre-admissions form optimized to maximize student recruitment.",
    "project.p10.features": "Modern responsive design optimized for conversions,Pre-admissions form with real-time validation,Dynamic academic offerings and curricula presentation,Interactive testimonials and photography gallery integration",

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
    "sunat.invoice.type": "ELECTRONIC INVOICE",
    "sunat.invoice.status": "ACCEPTED",
    "sunat.invoice.signed": "Digitally signed • Sent to SUNAT",

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
