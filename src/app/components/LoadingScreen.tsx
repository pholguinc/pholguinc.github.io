"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const interval = 16;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease-out curve
      const t = current / steps;
      setProgress(Math.round((1 - Math.pow(1 - t, 2)) * 100));
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setVisible(false), 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-3xl font-semibold mb-10 select-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icon.svg" alt="logo" width={40} height={40} className="rounded-full" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pedro
            </span>
            <span className="text-white">Holguin</span>
          </motion.div>

          {/* Skeleton blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-72 flex flex-col gap-3 mb-10"
          >
            <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="h-3 rounded-full bg-slate-800 overflow-hidden w-4/5">
              <motion.div
                className="h-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
            </div>
            <div className="h-3 rounded-full bg-slate-800 overflow-hidden w-3/5">
              <motion.div
                className="h-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-48 flex flex-col items-end gap-1.5"
          >
            <span className="text-xs text-slate-500 tabular-nums">
              {progress}%
            </span>
            <div className="w-full h-[3px] rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
