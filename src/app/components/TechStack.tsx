"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs,
  SiNodedotjs, SiPython, SiExpress, SiFastapi, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiFirebase,
  SiDocker, SiKubernetes, SiVercel,
  SiFlutter, SiFigma,
  SiNestjs, SiNativescript, SiIonic,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

type Category = "Frontend" | "Backend" | "BD" | "Tools";

const categoryStyles: Record<Category, string> = {
  Frontend: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30",
  Backend:  "bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/30",
  BD:       "bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30",
  Tools:    "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30",
};

const techs: { name: string; icon: IconType; iconColor: string; category: Category }[] = [
  { name: "React",        icon: SiReact,      iconColor: "#61DAFB", category: "Frontend" },
  { name: "Next.js",      icon: SiNextdotjs,  iconColor: "#ffffff", category: "Frontend" },
  { name: "TypeScript",   icon: SiTypescript, iconColor: "#3178C6", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss,iconColor: "#06B6D4", category: "Frontend" },
  { name: "React Native", icon: SiReact,        iconColor: "#61DAFB", category: "Frontend" },
  { name: "NativeScript", icon: SiNativescript, iconColor: "#65ADF1", category: "Frontend" },
  { name: "Ionic",        icon: SiIonic,         iconColor: "#3880FF", category: "Frontend" },
  { name: "Node.js",      icon: SiNodedotjs,  iconColor: "#68A063", category: "Backend"  },
  { name: "NestJS",       icon: SiNestjs,  iconColor: "#E0234E", category: "Backend"  },
  { name: "Python",       icon: SiPython,     iconColor: "#FFD43B", category: "Backend"  },
  { name: "Express",      icon: SiExpress,    iconColor: "#b3b3b3", category: "Backend"  },
  { name: "FastAPI",      icon: SiFastapi,    iconColor: "#009688", category: "Backend"  },
  { name: "GraphQL",      icon: SiGraphql,    iconColor: "#E10098", category: "Backend"  },
  { name: "PostgreSQL",   icon: SiPostgresql, iconColor: "#336791", category: "BD"       },
  { name: "MongoDB",      icon: SiMongodb,    iconColor: "#47A248", category: "BD"       },
  { name: "Redis",        icon: SiRedis,      iconColor: "#DC382D", category: "BD"       },
  { name: "Firebase",     icon: SiFirebase,   iconColor: "#FFCA28", category: "BD"       },
  { name: "Docker",       icon: SiDocker,     iconColor: "#2496ED", category: "Tools"    },
  { name: "Kubernetes",   icon: SiKubernetes, iconColor: "#326CE5", category: "Tools"    },
  { name: "AWS",          icon: FaAws,        iconColor: "#FF9900", category: "Tools"    },
  { name: "Vercel",       icon: SiVercel,     iconColor: "#ffffff", category: "Tools"    },
  { name: "Figma",        icon: SiFigma,      iconColor: "#F24E1E", category: "Tools"    },
];

function TechCard({ name, icon: Icon, iconColor, category }: { name: string; icon: IconType; iconColor: string; category: Category }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 cursor-default select-none mx-4 shrink-0 w-36">
      <Icon style={{ fontSize: 48, color: iconColor }} />
      <span className="font-medium text-slate-700 dark:text-slate-200 whitespace-nowrap text-sm text-center">
        {name}
      </span>
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryStyles[category]}`}>
        {category}
      </span>
    </div>
  );
}

export function TechStack() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-20 bg-white dark:bg-slate-900 transition-colors overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">
            {t("stack.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("stack.description")}
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-left { animation: marquee-left 50s linear infinite; }
        .marquee-left:hover { animation-play-state: paused; }
      `}} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex marquee-left w-max">
            {[...techs, ...techs].map((tech, i) => (
              <TechCard key={i} {...tech} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
