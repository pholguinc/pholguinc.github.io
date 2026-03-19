"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useInView } from "./hooks/useInView";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    title: "Aplicación de Notificaciones con WebSockets",
    description:
      "Aplicación de Notificaciones que permite a los usuarios recibir notificaciones en tiempo real.",
    fullDescription:
      "Aplicación de Notificaciones que permite a los usuarios recibir notificaciones en tiempo real. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    image: "/images/projects/web-socket.webp",
    images: [
      "/images/projects/web-socket.webp",
      "/images/projects/01-websocket.png",
    ],
    tags: ["Node.js", "TypeScript", "SQL Server", "Socket.io"],
    category: "Web, Backend",
    github: "",
    demo: "",
    features: [
      "Notificaciones en tiempo real con WebSockets",
      "Sistema de autenticación y autorización de usuarios",
      "Panel de administración para gestionar notificaciones",
      "API RESTful con documentación Swagger",
    ],
  },

  {
    title: "Sistema de Gestión de Restaurantes",
    description:
      "Sistema de Gestión de Restaurantes que permite a los usuarios gestionar pedidos, mesas, clientes y ventas.",
    fullDescription:
      "Sistema de Gestión de Restaurantes que permite a los usuarios gestionar pedidos, mesas, clientes y ventas. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    image: "/images/projects/restaurante.webp",
    images: ["/images/projects/restaurante.webp"],
    tags: ["PHP", "Javascript", "AJAX", "MySQL"],
    category: "Web",
    github: "",
    demo: "",
    features: [
      "Gestión de Categorías",
      "Gestión de Productos",
      "Gestión de pedidos",
      "Gestión de mesas",
      "Gestión de usuarios",
      "Gestión de ventas",
    ],
  },

  {
    title: "Sistema de Almacén e Inventario",
    description:
      "Sistema de Almacén e Inventario que permite a los usuarios gestionar productos, categorías, usuarios y ventas.",
    fullDescription:
      "Sistema de Almacén e Inventario que permite a los usuarios gestionar productos, categorías, usuarios y ventas. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    image: "/images/projects/inventario.webp",
    images: ["/images/projects/inventario.webp"],
    tags: ["Nodejs", "TypeScript", "SQL Server", "Socket.io"],
    category: "Web",
    github: "",
    demo: "",
    features: [
      "Gestión de Categorías",
      "Gestión de Productos",
      "Gestión de pedidos",
      "Gestión de mesas",
      "Gestión de usuarios",
      "Gestión de ventas",
    ],
  },

  {
    title: "App Movil de gestión de asistencia con QR",
    description:
      "App Movil de gestión de asistencia con QR que permite a los usuarios gestionar productos, categorías, usuarios y ventas.",
    fullDescription:
      "App Movil de gestión de asistencia con QR que permite a los usuarios gestionar productos, categorías, usuarios y ventas. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    image: "/images/projects/app-qr.webp",
    images: ["/images/projects/app-qr.webp"],
    tags: ["Java", "Android Studio", "SQL Lite"],
    category: "Mobile",
    github: "",
    demo: "",
    features: [
      "Escaneo de códigos QR para registro de asistencia",
      "Generación de QR único por estudiante o empleado",
      "Almacenamiento local con SQLite sin necesidad de internet",
      "Reportes de asistencia por fecha, usuario o grupo",
    ],
  },

  {
    title: "API para consulta RUC SUNAT",
    description:
      "API para consulta RUC SUNAT que permite a los usuarios consultar información de empresas registradas en la SUNAT.",
    fullDescription:
      "API para consulta RUC SUNAT que permite a los usuarios consultar información de empresas registradas en la SUNAT. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    image: "/images/projects/sunat-webscraping.webp",
    images: ["/images/projects/sunat-webscraping.webp"],
    tags: ["Python", "FastAPI"],
    category: "Backend",
    github: "",
    demo: "",
    features: [
      "Consulta de RUC SUNAT",
      "Consulta de DNI",
      "Consulta de información de empresas registradas en la SUNAT",
      "Consulta de información de personas registradas en la RENIEC",
    ],
  },

  {
    title: "Automatización de proyectos NestJS",
    description:
      "Automatización de proyectos NestJS que permite a los usuarios automatizar la creación de proyectos NestJS.",
    fullDescription:
      "Automatización de proyectos NestJS que permite a los usuarios automatizar la creación de estructura de carpetas con NestJS",
    image: "/images/projects/nestjs-hexa-services.webp",
    images: ["/images/projects/nestjs-hexa-services.webp"],
    tags: ["Python", "FastAPI"],
    category: "Library",
    github: "",
    demo: "",
    features: [
      "Creación de features con Arquitectura bajo Capas",
      "Creación de features con Arquitectura Hexagonal",
      "Creación de features para Microservicios",
    ],
  },

  {
    title: "APP PWA de Viajes Turísticos para Colombia con IA",
    description:
      "APP PWA de Viajes Turísticos para Colombia con IA que permite a los usuarios visualizar recomendaciones para su viaje mediante sus preferencias.",
    fullDescription:
      "APP PWA de Viajes Turísticos para Colombia con IA que permite a los usuarios visualizar recomendaciones para su viaje mediante sus preferencias. Incluye sistema de notificaciones en tiempo real, procesamiento de pagos seguro, panel de administración avanzado, gestión de inventario en tiempo real, y análisis de ventas detallado.",
    image: "/images/projects/kodotakai.webp",
    images: ["/images/projects/kodotakai.webp"],
    tags: ["Python", "Flask", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    category: "Mobile",
    github: "",
    demo: "",
    features: [
      "Creación de features con Arquitectura bajo Capas",
      "Creación de features con Arquitectura Hexagonal",
      "Creación de features para Microservicios",
    ],
  },

  {
    title: "Librería para generar esquemas para facturación electrónica SUNAT",
    description:
      "Librería para generar esquemas para facturación electrónica SUNAT que permite a los usuarios generar esquemas para facturación electrónica SUNAT.",
    fullDescription:
      "Librería para generar esquemas para facturación electrónica SUNAT que permite a los usuarios generar esquemas para facturación electrónica SUNAT cumpliendo la normativa de SUNAT y UBL 2.1 para la generación de las interfaces en Typescript",
    image: "/images/projects/xsd-generated-sunat.webp",
    images: ["/images/projects/xsd-generated-sunat.webp"],
    tags: ["XML", "XSD", "TypeScript"],
    category: "Library",
    github: "",
    demo: "",
    features: [
      "Creación de features con Arquitectura bajo Capas",
      "Creación de features con Arquitectura Hexagonal",
      "Creación de features para Microservicios",
    ],
  },
  {
    title: "App Móvil para Gestión de Soporte Técnico",
    description:
      "Aplicación Android para registrar, asignar y dar seguimiento a tickets de soporte técnico desde dispositivos móviles.",
    fullDescription:
      "Aplicación Android nativa para la gestión integral de soporte técnico. Permite a los técnicos recibir y atender tickets en campo, registrar el historial de intervenciones, adjuntar evidencias fotográficas y actualizar el estado de cada incidencia en tiempo real desde su dispositivo móvil.",
    image: "/images/projects/app-qr.webp",
    images: ["/images/projects/app-qr.webp"],
    tags: ["Nestjs", "Typescript", "React Native", "PostgreSQL"],
    category: "Mobile",
    github: "",
    demo: "",
    features: [
      "Creación y asignación de tickets de soporte técnico",
      "Seguimiento del estado de incidencias en tiempo real",
      "Registro fotográfico de evidencias por ticket",
      "Historial de intervenciones por equipo o usuario",
    ],
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="proyectos"
      className="py-20 bg-white dark:bg-slate-900 transition-colors"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Algunos de los proyectos que he desarrollado para clientes de
            diversos sectores
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700 hover:border-cyan-500/60 dark:hover:border-cyan-400/60"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openModal(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {!!project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white dark:bg-slate-900 rounded-full hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {!!project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white dark:bg-slate-900 rounded-full hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-cyan-600 dark:text-cyan-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
