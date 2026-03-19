"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
  features?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="dark:text-white" size={20} />
              </button>

              {/* Image Slider */}
              <div className="relative h-80 bg-slate-900 dark:bg-black rounded-t-2xl overflow-hidden">
                <ImageWithFallback
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Slider Controls */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
                    >
                      <ChevronLeft className="dark:text-white" size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
                    >
                      <ChevronRight className="dark:text-white" size={20} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "bg-white w-6"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-sm">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {!!project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white rounded-lg transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {!!project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white rounded-lg transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h2 className="text-3xl mb-3 dark:text-white">{project.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">{project.fullDescription}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg mb-3 dark:text-white">Stack Tecnológico</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg text-sm shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-lg mb-3 dark:text-white">Características Principales</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}