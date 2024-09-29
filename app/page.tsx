"use client"; // Mark this as a client-side component
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
