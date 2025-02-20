import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}