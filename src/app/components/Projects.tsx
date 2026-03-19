"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    key: "p1",
    image: "/images/projects/web-socket.webp",
    images: [
      "/images/projects/web-socket.webp",
      "/images/projects/01-websocket.png",
    ],
    tags: ["Node.js", "TypeScript", "SQL Server", "Socket.io"],
    category: "Web, Backend",
    github: "",
    demo: "",
  },
  {
    key: "p2",
    image: "/images/projects/restaurante.webp",
    images: ["/images/projects/restaurante.webp"],
    tags: ["PHP", "Javascript", "AJAX", "MySQL"],
    category: "Web",
    github: "",
    demo: "",
  },
  {
    key: "p3",
    image: "/images/projects/inventario.webp",
    images: ["/images/projects/inventario.webp"],
    tags: ["Nodejs", "TypeScript", "SQL Server", "Socket.io"],
    category: "Web",
    github: "",
    demo: "",
  },
  {
    key: "p4",
    image: "/images/projects/app-qr.webp",
    images: ["/images/projects/app-qr.webp"],
    tags: ["Java", "Android Studio", "SQL Lite"],
    category: "Mobile",
    github: "",
    demo: "",
  },
  {
    key: "p5",
    image: "/images/projects/sunat-webscraping.webp",
    images: ["/images/projects/sunat-webscraping.webp"],
    tags: ["Python", "FastAPI"],
    category: "Backend",
    github: "",
    demo: "",
  },
  {
    key: "p6",
    image: "/images/projects/nestjs-hexa-services.webp",
    images: ["/images/projects/nestjs-hexa-services.webp"],
    tags: ["Python", "FastAPI"],
    category: "Library",
    github: "",
    demo: "",
  },
  {
    key: "p7",
    image: "/images/projects/kodotakai.webp",
    images: ["/images/projects/kodotakai.webp"],
    tags: ["Python", "Flask", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    category: "Mobile",
    github: "",
    demo: "",
  },
  {
    key: "p8",
    image: "/images/projects/xsd-generated-sunat.webp",
    images: ["/images/projects/xsd-generated-sunat.webp"],
    tags: ["XML", "XSD", "TypeScript"],
    category: "Library",
    github: "",
    demo: "",
  },
  {
    key: "p9",
    image: "/images/projects/soporte-app.webp",
    images: ["/images/projects/soporte-app.webp"],
    tags: ["Nestjs", "Typescript", "React Native", "PostgreSQL"],
    category: "Mobile",
    github: "",
    demo: "",
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();
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
            {t("projects.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
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
                  alt={t(`project.${project.key}.title`)}
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
                  {t(`project.${project.key}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {t(`project.${project.key}.description`)}
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
