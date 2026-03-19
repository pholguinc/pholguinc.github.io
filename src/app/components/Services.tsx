"use client";

import { motion } from "motion/react";
import { Globe, Smartphone, Bot, Cloud, Code, Database } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";

const services = [
  { icon: Globe,      key: "web" },
  { icon: Smartphone, key: "mobile" },
  { icon: Bot,        key: "ai" },
  { icon: Cloud,      key: "cloud" },
  { icon: Code,       key: "custom" },
  { icon: Database,   key: "database" },
];

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors cursor-pointer" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">
            {t("services.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-400/60"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl mb-3 dark:text-white">{t(`service.${service.key}.title`)}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{t(`service.${service.key}.description`)}</p>
              <ul className="space-y-2">
                {t(`service.${service.key}.features`).split(",").map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2" />
                    {feature.trim()}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}