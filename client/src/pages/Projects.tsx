import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Ascend Hiring",
      description: "AI-Powered Recruitment Agent & Applicant Tracking System Integration (25+ ATS)",
      image: "https://cdn.prod.website-files.com/66219824440af70bb5dfb15c/665f547ec7d593ffce9f0c31_candidates-screen.png",
      link: "/projects/ascend-hiring"
    },
    {
      title: "CAGR Club",
      description: "Elite investment community platform",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      link: "/projects/cagr-club"
    },
    {
      title: "LinkedIn AI Analyzer",
      description: "Perplexity Powered LinkedIn Post Analysis Tool",
      image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740605007/icon128_mtkiaq.png",
      link: "/projects/linkedin-analyzer"
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
      link: "/projects/chrome-extension"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
