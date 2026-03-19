"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CodeConsole } from "./CodeConsole";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

const TEXTS = [
  "Full Stack Developer",
  "Angular Developer Expert",
  "React Developer Expert",
  "NestJS Developer Expert",
  "ERP Systems Developer",
  "Backend Engineer",
  "Cloud & DevOps",
];

function useCyclingTypewriter(
  texts: string[],
  typeSpeed = 55,
  deleteSpeed = 30,
  pause = 1800,
) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed(
            deleting
              ? current.slice(0, displayed.length - 1)
              : current.slice(0, displayed.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts, typeSpeed, deleteSpeed, pause]);

  return displayed;
}

export function Hero() {
  const { t } = useLanguage();
  const displayed = useCyclingTypewriter(TEXTS);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-black dark:via-blue-950 dark:to-black"
    >
      {/* Background design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dot grid — light */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Dot grid — dark */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(56,189,248,0.12) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[700px] max-h-[700px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-3xl" />

        {/* Rotating rings */}
        <motion.div
          className="hidden md:block absolute top-1/2 right-[-80px] -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-cyan-500/20 dark:border-cyan-400/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden md:block absolute top-1/2 right-[-160px] -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-blue-500/10 dark:border-blue-400/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden md:block absolute top-1/2 right-[-240px] -translate-y-1/2 w-[950px] h-[950px] rounded-full border border-cyan-400/[0.07] dark:border-cyan-300/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Blobs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-30"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-30"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating code symbols */}
        <motion.span
          className="absolute top-[16%] right-[22%] text-6xl font-mono font-bold text-cyan-500/15 dark:text-cyan-400/25 select-none"
          animate={{ y: [0, -20, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.span>
        <motion.span
          className="absolute bottom-[18%] left-[7%] text-5xl font-mono font-bold text-blue-500/15 dark:text-blue-400/25 select-none"
          animate={{ y: [0, 16, 0], rotate: [3, -3, 3] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          {"{ }"}
        </motion.span>
        <motion.span
          className="absolute top-[58%] right-[5%] text-4xl font-mono text-cyan-400/15 dark:text-cyan-300/20 select-none"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          {"[ ]"}
        </motion.span>
        <motion.span
          className="absolute top-[28%] left-[3%] text-7xl font-mono text-blue-400/10 dark:text-blue-300/20 select-none"
          animate={{ y: [0, 18, 0] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          {"()"}
        </motion.span>
        <motion.span
          className="absolute bottom-[35%] right-[28%] text-3xl font-mono text-cyan-500/10 dark:text-cyan-400/20 select-none"
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          {"=>"}
        </motion.span>

        <motion.span
          className="absolute top-[8%] left-[18%] text-4xl font-mono text-blue-500/10 dark:text-blue-400/20 select-none"
          animate={{ y: [0, 14, 0], rotate: [0, 6, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          {"<div>"}
        </motion.span>
        <motion.span
          className="absolute top-[82%] right-[15%] text-3xl font-mono text-cyan-500/10 dark:text-cyan-400/18 select-none"
          animate={{ y: [0, -14, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          {"</div>"}
        </motion.span>
        <motion.span
          className="absolute top-[44%] left-[12%] text-3xl font-mono text-blue-400/10 dark:text-blue-300/18 select-none"
          animate={{ y: [0, 12, 0], rotate: [-3, 3, -3] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          {"const"}
        </motion.span>
        <motion.span
          className="absolute top-[72%] left-[22%] text-2xl font-mono text-cyan-500/10 dark:text-cyan-400/18 select-none"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5,
          }}
        >
          {"import"}
        </motion.span>
        <motion.span
          className="absolute top-[12%] right-[8%] text-3xl font-mono text-blue-400/10 dark:text-blue-300/18 select-none"
          animate={{ y: [0, 16, 0], rotate: [2, -2, 2] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          {"async"}
        </motion.span>
        <motion.span
          className="absolute bottom-[10%] left-[35%] text-2xl font-mono text-cyan-400/10 dark:text-cyan-300/18 select-none"
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        >
          {"await"}
        </motion.span>
        <motion.span
          className="absolute top-[38%] right-[14%] text-5xl font-mono font-bold text-blue-500/10 dark:text-blue-400/18 select-none"
          animate={{ y: [0, 14, 0] }}
          transition={{
            duration: 10.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          {"{ }"}
        </motion.span>
        <motion.span
          className="absolute top-[88%] left-[5%] text-4xl font-mono text-cyan-500/10 dark:text-cyan-400/18 select-none"
          animate={{ y: [0, -12, 0], rotate: [3, -3, 3] }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        >
          {"npm"}
        </motion.span>
        <motion.span
          className="absolute top-[5%] right-[40%] text-3xl font-mono text-blue-400/10 dark:text-blue-300/18 select-none"
          animate={{ y: [0, 12, 0], rotate: [-4, 4, -4] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2,
          }}
        >
          {"==="}
        </motion.span>
        <motion.span
          className="absolute bottom-[52%] right-[2%] text-2xl font-mono text-cyan-500/10 dark:text-cyan-400/18 select-none"
          animate={{ y: [0, -16, 0] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.8,
          }}
        >
          {"return"}
        </motion.span>
        <motion.span
          className="absolute top-[65%] left-[1%] text-3xl font-mono text-blue-500/10 dark:text-blue-400/18 select-none"
          animate={{ y: [0, 10, 0], rotate: [0, 4, 0] }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          {"&&"}
        </motion.span>
        <motion.span
          className="absolute top-[3%] left-[50%] text-2xl font-mono text-cyan-400/10 dark:text-cyan-300/18 select-none"
          animate={{ y: [0, 14, 0], rotate: [-3, 3, -3] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4.5,
          }}
        >
          {"useState"}
        </motion.span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl mb-6 text-slate-900 dark:text-white">
                {t("hero.title")}
                <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  {displayed}
                  <span className="inline-block w-[3px] h-[0.85em] bg-cyan-500 ml-1 align-middle animate-pulse" />
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl lg:max-w-none text-justify"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.description")
                .split("Pedro Holguín")
                .map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-slate-900 dark:text-white">
                        Pedro Holguín
                      </span>
                    </span>
                  ) : (
                    part
                  ),
                )}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#proyectos"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300"
              >
                {t("hero.viewProjects")}
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 bg-slate-900/10 dark:bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white rounded-full border border-slate-900/20 dark:border-white/20 hover:bg-slate-900/20 dark:hover:bg-white/20 transition-all duration-300"
              >
                {t("hero.contact")}
              </a>
            </motion.div>
          </div>

          {/* Right side - Code Console */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <CodeConsole />
          </div>
        </div>
      </div>

      <motion.a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-700/60 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
