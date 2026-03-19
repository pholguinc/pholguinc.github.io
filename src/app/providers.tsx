"use client";

import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { SmokeTrail } from "./components/SmokeTrail";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ParticlesBackground />
        <SmokeTrail />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
