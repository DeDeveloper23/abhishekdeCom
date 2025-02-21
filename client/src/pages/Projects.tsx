import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Ascend Hiring",
      description: "AI-Powered Recruitment & Applicant Tracking System",
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
      description: "Smart post analysis tool",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
      link: "/projects/linkedin-analyzer"
    },
    {
      title: "Chrome Extension",
      description: "Local AI-powered note taking tool",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80",
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
