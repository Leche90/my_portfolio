import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/Hero/Hero";
import ProjectGallery from "@/components/Projects/ProjectGallery";
import TechStackMatrix from "@/components/Stack/TechStackMatrix";
import Timeline from "@/components/Timeline/Timeline";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProjectGallery />
        <TechStackMatrix />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
