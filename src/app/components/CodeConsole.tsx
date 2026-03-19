"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const codeLinesDefs = {
  es: [
    { id: 1, text: "$ npm install innovacion", delay: 0 },
    { id: 2, text: "✓ Instalando dependencias...", delay: 0.5 },
    { id: 3, text: "✓ Construyendo proyectos increíbles...", delay: 1 },
    { id: 4, text: "", delay: 1.5 },
    { id: 5, text: "const desarrollador = {", delay: 2 },
    { id: 6, text: "  nombre: 'Pedro Holguin',", delay: 2.3 },
    { id: 7, text: "  skills: ['React', 'IA', 'NestJS'],", delay: 2.6 },
    { id: 8, text: "  pasion: '∞',", delay: 2.9 },
    { id: 9, text: "  disponible: true", delay: 3.2 },
    { id: 10, text: "};", delay: 3.5 },
    { id: 11, text: "", delay: 3.8 },
    { id: 12, text: "desarrollador.construirProyecto();", delay: 4.1 },
    { id: 13, text: "> ¡Éxito! 🚀", delay: 4.6, highlight: true },
  ],
  en: [
    { id: 1, text: "$ npm install innovation", delay: 0 },
    { id: 2, text: "✓ Installing dependencies...", delay: 0.5 },
    { id: 3, text: "✓ Building amazing products...", delay: 1 },
    { id: 4, text: "", delay: 1.5 },
    { id: 5, text: "const developer = {", delay: 2 },
    { id: 6, text: "  name: 'Pedro Holguin',", delay: 2.3 },
    { id: 7, text: "  skills: ['React', 'AI', 'NestJS'],", delay: 2.6 },
    { id: 8, text: "  passion: '∞',", delay: 2.9 },
    { id: 9, text: "  available: true", delay: 3.2 },
    { id: 10, text: "};", delay: 3.5 },
    { id: 11, text: "", delay: 3.8 },
    { id: 12, text: "developer.buildYourProject();", delay: 4.1 },
    { id: 13, text: "> Success! 🚀", delay: 4.6, highlight: true },
  ],
};

export function CodeConsole() {
  const { language } = useLanguage();
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const codeLines = codeLinesDefs[language as "es" | "en"] ?? codeLinesDefs.es;

  useEffect(() => {
    setVisibleLines([]);
    const timers: ReturnType<typeof setTimeout>[] = [];
    codeLines.forEach((line) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, line.id]);
        }, line.delay * 1000),
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [language]);

  return (
    <motion.div
      className="relative w-full max-w-2xl"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Terminal Window */}
      <div className="bg-white dark:bg-slate-950 rounded-lg shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        {/* Terminal Header */}
        <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 ml-4 text-slate-500 dark:text-slate-400 text-sm">
            <Terminal size={16} />
            <span>terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm">
          {codeLines.map((line) => (
            <motion.div
              key={line.id}
              className={`mb-2 ${
                line.highlight
                  ? "text-green-600 dark:text-green-400"
                  : line.text.startsWith("$")
                    ? "text-blue-600 dark:text-blue-400"
                    : line.text.startsWith("✓")
                      ? "text-green-600 dark:text-green-400"
                      : line.text.includes(":")
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-slate-700 dark:text-slate-300"
              }`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: visibleLines.includes(line.id) ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {line.text || <span className="opacity-0">.</span>}
              {visibleLines.includes(line.id) &&
                line.id === Math.max(...visibleLines) &&
                line.id !== codeLines.length && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-purple-500 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
            </motion.div>
          ))}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent pointer-events-none" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute -right-4 -top-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -left-4 -bottom-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
