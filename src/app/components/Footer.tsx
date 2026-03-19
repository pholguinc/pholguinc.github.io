"use client";

import { Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 dark:bg-black py-8 transition-colors border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          {t("footer.madeBy")}
        </p>
        <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
