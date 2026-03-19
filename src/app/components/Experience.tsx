"use client";

import { motion, AnimatePresence } from "motion/react";
import { Briefcase, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect, useCallback, useRef } from "react";

const experiences = [
  {
    key: "exp1",
    year: "2018",
    period: "En 2018 – Dic 2023",
    periodEn: "En 2018 – Dic 2023",
    location: "Lima, Perú",
    type: "full-time",
  },
  {
    key: "exp2",
    year: "2023",
    period: "Oct 2023 – Oct 2024",
    periodEn: "Oct 2023 – Oct 2024",
    location: "Lima, Perú",
    type: "full-time",
  },
  {
    key: "exp3",
    year: "2024",
    period: "Nov 2024 – Feb 2025",
    periodEn: "Nov 2024 – Feb 2025",
    location: "Lima, Perú",
    type: "full-time",
  },
  {
    key: "exp4",
    year: "2025",
    period: "Mar 2025 – Ago 2025",
    periodEn: "Mar 2025 – Aug 2025",
    location: "Lima, Perú",
    type: "full-time",
  },
  {
    key: "exp5",
    year: "2024",
    period: "Oct 2024 – Nov 2025",
    periodEn: "Oct 2024 – Nov 2025",
    location: "Lima, Perú",
    type: "full-time",
  },
  {
    key: "exp6",
    year: "2025",
    period: "Oct 2025 – Ene 2026",
    periodEn: "Oct 2025 – Jan 2026",
    location: "Lima, Perú",
    type: "full-time",
  },
  {
    key: "exp7",
    year: "2025",
    period: "Nov 2025 – Feb 2026",
    periodEn: "Nov 2025 – Feb 2026",
    location: "Lima, Perú",
    type: "full-time",
  },
  {
    key: "exp8",
    year: "2026",
    period: "Feb 2026 – Presente",
    periodEn: "Feb 2026 – Present",
    location: "Lima, Perú",
    type: "full-time",
  },
];

const N = experiences.length;

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 220 : -220,
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -220 : 220, opacity: 0, scale: 0.95 }),
};

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((i) => (i + 1) % N);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + N) % N);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
  }, [next]);

  useEffect(() => {
    if (!isInView) return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInView, resetTimer]);

  const handleNav = (fn: () => void) => {
    fn();
    resetTimer();
  };

  const handleDot = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
    resetTimer();
  };

  const exp = experiences[activeIndex];

  return (
    <section
      id="experiencia"
      className="py-20 bg-white dark:bg-slate-900 transition-colors overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            {t("experience.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("experience.description")}
          </p>
        </motion.div>

        {/* ── Timeline bar ── */}
        <motion.div
          className="relative mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Track */}
          <div className="absolute left-0 right-0 top-[1.85rem] h-0.5 bg-slate-200 dark:bg-slate-700" />
          {/* Active fill */}
          <motion.div
            className="absolute left-0 top-[1.85rem] h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"
            animate={{ width: `${(activeIndex / (N - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <div className="relative flex items-start justify-between">
            {experiences.map((e, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <button
                  key={e.key}
                  onClick={() => handleDot(i)}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  {/* Year */}
                  <span
                    className={`text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-cyan-500 dark:text-cyan-400"
                        : isPast
                          ? "text-slate-400 dark:text-slate-500"
                          : "text-slate-300 dark:text-slate-600"
                    } group-hover:text-cyan-500 dark:group-hover:text-cyan-400`}
                  >
                    {e.year}
                  </span>
                  {/* Dot */}
                  <motion.div
                    animate={{ scale: isActive ? 1.5 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-3.5 h-3.5 rounded-full ring-4 transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600 ring-cyan-200 dark:ring-cyan-900/60"
                        : isPast
                          ? "bg-cyan-400 dark:bg-cyan-600 ring-white dark:ring-slate-900"
                          : "bg-slate-300 dark:bg-slate-600 ring-white dark:ring-slate-900 group-hover:bg-slate-400"
                    }`}
                  />
                  {/* Period below dot */}
                  <span
                    className={`hidden md:block text-[8px] text-center leading-tight transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-cyan-600 dark:text-cyan-400 font-medium"
                        : "text-slate-400 dark:text-slate-600"
                    }`}
                  >
                    {language === "es" ? e.period : e.periodEn}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="flex items-center gap-4">
            {/* Prev */}
            <button
              onClick={() => handleNav(prev)}
              className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Card */}
            <div className="flex-1 min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-7 shadow-xl border border-cyan-500/30 dark:border-cyan-400/20 flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                          {t(`experience.${exp.key}.role`)}
                        </h3>
                        <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                          {t(`experience.${exp.key}.company`)}
                        </p>
                      </div>
                      <span className="text-3xl font-bold text-cyan-500/20 dark:text-cyan-400/20 font-mono select-none">
                        {exp.year}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {t(`experience.${exp.key}.description`)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {t(`experience.${exp.key}.tags`)
                        .split(",")
                        .map((tag) => (
                          <span
                            key={tag.trim()}
                            className="text-xs px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-700 pt-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={12} />
                        {t(`experience.type.${exp.type}`)}
                      </span>
                      <span className="ml-auto font-medium text-cyan-500/70 dark:text-cyan-400/70">
                        {language === "es" ? exp.period : exp.periodEn}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            <button
              onClick={() => handleNav(next)}
              className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all shadow-sm cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile pill dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-6 h-2 bg-cyan-500"
                    : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
