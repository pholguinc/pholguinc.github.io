"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.services", href: "#servicios" },
  { key: "nav.stack", href: "#stack" },
  { key: "nav.experience", href: "#experiencia" },
  { key: "nav.projects", href: "#proyectos" },
  { key: "nav.sunat", href: "#sunat" },
  { key: "nav.contact", href: "#contacto" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-2xl dark:text-white text-slate-900"
              whileHover={{ scale: 1.05 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icon.svg"
                alt="logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                Pedro
              </span>{" "}
              Holguin
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`relative group pb-1 transition-colors ${
                      isActive
                        ? "text-cyan-500 dark:text-cyan-400"
                        : "text-slate-700 dark:text-white/80 hover:text-cyan-500 dark:hover:text-cyan-400"
                    }`}
                  >
                    {t(item.key)}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="text-slate-700" size={20} />
                ) : (
                  <Sun className="text-yellow-400" size={20} />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
                aria-label="Toggle language"
              >
                <Globe className="text-slate-700 dark:text-white" size={20} />
                <span className="text-sm text-slate-700 dark:text-white uppercase">
                  {language}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {theme === "light" ? (
                  <Moon className="text-slate-700" size={20} />
                ) : (
                  <Sun className="text-yellow-400" size={20} />
                )}
              </button>
              <button
                className="text-slate-700 dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="md:hidden fixed top-0 left-0 h-full w-full z-50 bg-slate-950/97 backdrop-blur-xl flex flex-col items-center justify-center px-8 pb-10 gap-2 shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>

              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.28 }}
                    className={`py-3 text-xl text-center w-full max-w-xs border-b border-white/10 transition-colors ${
                      isActive
                        ? "text-cyan-400 font-medium"
                        : "text-white/80 hover:text-cyan-400"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </motion.a>
                );
              })}

              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * navItems.length, duration: 0.28 }}
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 py-3 text-white/80 hover:text-cyan-400 transition-colors mt-4 w-full max-w-xs"
              >
                <Globe size={18} />
                <span className="uppercase text-sm">
                  {language === "es" ? "English" : "Español"}
                </span>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
