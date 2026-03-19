"use client";

import { motion } from "motion/react";
import { FileText, CheckCircle, Zap, Shield, BarChart, RefreshCw } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";

export function SunatBilling() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  const features = [
    { icon: FileText, key: "feature1" },
    { icon: Zap, key: "feature2" },
    { icon: CheckCircle, key: "feature3" },
    { icon: Shield, key: "feature4" },
    { icon: BarChart, key: "feature5" },
    { icon: RefreshCw, key: "feature6" },
  ];

  return (
    <section id="sunat" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-blue-950 transition-colors" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            SUNAT - Perú
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">
            {t("sunat.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t("sunat.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 dark:text-slate-300">
                    {t(`sunat.${feature.key}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
              {/* Mock Invoice */}
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-500 dark:text-slate-400">FACTURA ELECTRÓNICA</div>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs">
                    ACEPTADO
                  </div>
                </div>
                <div className="text-2xl dark:text-white mb-1">F001-00001234</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">RUC: 20123456789</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Subtotal:</span>
                  <span className="dark:text-white">S/ 1,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">IGV (18%):</span>
                  <span className="dark:text-white">S/ 180.00</span>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex justify-between">
                  <span className="font-medium dark:text-white">Total:</span>
                  <span className="text-xl text-cyan-600 dark:text-cyan-400">S/ 1,180.00</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                <Shield size={16} className="text-cyan-500" />
                <span>Firmado digitalmente • Enviado a SUNAT</span>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <motion.button
              className="mt-6 w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const msg = "Hola, deseo información sobre facturación electrónica SUNAT";
                window.open(`https://wa.me/51903023713?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
              }}
            >
              {t("sunat.cta")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
