"use clint"
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";

export default function Home() {

  return (
 <main>
  <Hero />
  <About />
  <Projects/>
  <Skill />
  <Contact />
 </main>
  );
}
