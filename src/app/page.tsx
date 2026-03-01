import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
