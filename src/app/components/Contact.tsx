"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = `*Nombre:* ${data.name}\n*Email:* ${data.email}\n*Asunto:* ${data.subject}\n\n${data.message}`;
    const url = `https://wa.me/51903023713?text=${encodeURIComponent(message).replace(/%2A/g, "*")}`;
    window.open(url, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-slate-50 dark:bg-black transition-colors"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-slate-900 dark:text-white">
              {t("contact.info")}
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {t("contact.email")}
                  </div>
                  <div className="text-lg text-slate-800 dark:text-white">
                    holguin98fx@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {t("contact.phone")}
                  </div>
                  <div className="text-lg text-slate-800 dark:text-white">
                    +51 903023713
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {t("contact.location")}
                  </div>
                  <div className="text-lg text-slate-800 dark:text-white">
                    Lima, Perú
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-4">
                {[
                  {
                    Icon: LinkedinIcon,
                    href: "https://www.linkedin.com/in/pedroholguinc",
                  },
                  { Icon: GithubIcon, href: "https://github.com/pholguinc" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-slate-600 dark:text-white"
                    style={{ background: "rgba(100,116,139,0.15)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(to bottom right, #06b6d4, #2563eb)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(6,182,212,0.5)";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(100,116,139,0.15)";
                      e.currentTarget.style.boxShadow = "";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {isSubmitSuccessful && (
              <div className="px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm">
                {t("contact.successMessage")}
              </div>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-2 text-slate-600 dark:text-slate-300"
              >
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: t("contact.validation.nameRequired"),
                  minLength: {
                    value: 2,
                    message: t("contact.validation.nameMin"),
                  },
                })}
                className={`w-full px-4 py-3 bg-white dark:bg-white/10 border rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)] transition-all text-slate-900 dark:text-white placeholder:text-slate-400 ${errors.name ? "border-red-500 dark:border-red-500" : "border-slate-300 dark:border-white/20"}`}
                placeholder={t("contact.namePlaceholder")}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 text-slate-600 dark:text-slate-300"
              >
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: t("contact.validation.emailRequired"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("contact.validation.emailInvalid"),
                  },
                })}
                className={`w-full px-4 py-3 bg-white dark:bg-white/10 border rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)] transition-all text-slate-900 dark:text-white placeholder:text-slate-400 ${errors.email ? "border-red-500 dark:border-red-500" : "border-slate-300 dark:border-white/20"}`}
                placeholder={t("contact.emailPlaceholder")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm mb-2 text-slate-600 dark:text-slate-300"
              >
                {t("contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", {
                  required: t("contact.validation.subjectRequired"),
                  minLength: {
                    value: 3,
                    message: t("contact.validation.subjectMin"),
                  },
                })}
                className={`w-full px-4 py-3 bg-white dark:bg-white/10 border rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)] transition-all text-slate-900 dark:text-white placeholder:text-slate-400 ${errors.subject ? "border-red-500 dark:border-red-500" : "border-slate-300 dark:border-white/20"}`}
                placeholder={t("contact.subjectPlaceholder")}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-2 text-slate-600 dark:text-slate-300"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: t("contact.validation.messageRequired"),
                  minLength: {
                    value: 10,
                    message: t("contact.validation.messageMin"),
                  },
                })}
                rows={5}
                className={`w-full px-4 py-3 bg-white dark:bg-white/10 border rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)] transition-all resize-none text-slate-900 dark:text-white placeholder:text-slate-400 ${errors.message ? "border-red-500 dark:border-red-500" : "border-slate-300 dark:border-white/20"}`}
                placeholder={t("contact.messagePlaceholder")}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-2xl hover:shadow-cyan-500/60 shadow-lg shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t("contact.send")}</span>
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
