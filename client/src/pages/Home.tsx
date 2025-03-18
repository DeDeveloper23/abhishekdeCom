import Hero from "@/components/Hero";
import AiExperience from "@/components/AiExperience";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const featuredProjects = [
    {
      title: "Ascend Hiring",
      description: "AI-Powered Recruitment Agents & Applicant Tracking System Integrations",
      image: "https://cdn.prod.website-files.com/66219824440af70bb5dfb15c/665f547ec7d593ffce9f0c31_candidates-screen.png",
      link: "/projects/ascend-hiring"
    },
    {
      title: "Atlas Chugged",
      description: "Visualize YouTube videos on a real-time map to understand geographical context",
      image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1742312924/Screenshot_2025-03-18_at_11.48.27_AM_eirwnm.png",
      link: "/projects/atlas-chugged"
    },
    {
      title: "CAGR Club",
      description: "Elite investment community platform",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      link: "/projects/cagr-club"
    },
    {
      title: "Squash NoteTaker",
      description: "Apple-inspired AI-powered note taking tool with document uploading support",
      image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740604689/gourd_olk8lm.png",
      imageStyle: { 
        maxHeight: "70%", 
        margin: "0 auto",
        filter: "brightness(0) saturate(100%) invert(65%) sepia(49%) saturate(410%) hue-rotate(336deg) brightness(93%) contrast(92%)"
      },
      link: "/projects/squash-notetaker"
    },
    {
      title: "LinkedIn AI Analyzer",
      description: "Perplexity Powered LinkedIn Post Analysis Tool",
      image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740605007/icon128_mtkiaq.png",
      link: "/projects/linkedin-analyzer"
    }
  ];

  return (
    <div className="pt-16">
      <Hero />
      <AiExperience />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
