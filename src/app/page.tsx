import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { SunatBilling } from "./components/SunatBilling";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

export default function Home() {
  return (
    <div className="size-full">
      <LoadingScreen />
      <Navigation />
      <Hero />
      <Services />
      <TechStack />
      <Experience />
      <Projects />
      <SunatBilling />
      <Contact />
      <Footer />
    </div>
  );
}
