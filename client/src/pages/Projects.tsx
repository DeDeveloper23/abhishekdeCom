import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  ArrowRight, 
  Code, 
  Briefcase, 
  Rocket, 
  Brain,
  ChevronRight,
  Star,
  Linkedin,
  Twitter
} from "lucide-react";

// Calico color patterns
const calicoColors = {
  primary: "#E2A378", // Warm orange
  secondary: "#A5C9CA", // Soft teal
  accent1: "#E7BCDE", // Soft pink
  accent2: "#D4E7C5", // Soft green
  accent3: "#BFD4E3", // Soft blue
};

// Project data with rich information
const projectsData = [
  {
    id: "ascend-hiring",
    title: "Ascend Hiring",
    shortDescription: "AI-Powered Recruitment Agent & Applicant Tracking System Integration",
    longDescription: "A comprehensive AI-powered recruitment platform that streamlines the hiring process from job posting to candidate screening and interview scheduling.",
    image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740779038/android-chrome-512x512_talib6.png",
    logo: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740778673/MT-SINAI-LOGO_zobyda.png",
    link: "/projects/ascend-hiring",
    category: "Enterprise SaaS",
    highlights: [
      "25+ ATS/CRM Integrations",
      "AI-Powered Resume Screening",
      "Automated Interview Scheduling",
      "Custom Job Description Generator"
    ],
    color: calicoColors.primary,
    technologies: ["React", "Node.js", "AI/ML", "API Integration"]
  },
  {
    id: "atlas-chugged",
    title: "Atlas Chugged",
    shortDescription: "YouTube video location mapping tool",
    longDescription: "A web application that visualizes locations mentioned in YouTube videos on a real-time map, providing geographical context to video content.",
    image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1742312924/Screenshot_2025-03-18_at_11.48.27_AM_eirwnm.png",
    link: "/projects/atlas-chugged",
    category: "Web App",
    highlights: [
      "Real-time Location Mapping",
      "YouTube Integration",
      "Interactive Map Experience",
      "Global Location Coverage"
    ],
    color: "#4285F4", // Google Maps blue
    technologies: ["React", "Google Maps API", "YouTube API", "NLP"]
  },
  {
    id: "cagr-club",
    title: "CAGR Club",
    shortDescription: "Elite investment community platform",
    longDescription: "An exclusive community platform for investment professionals featuring portfolio tracking, analysis tools, and member collaboration.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    link: "/projects/cagr-club",
    category: "FinTech",
    highlights: [
      "Portfolio Analytics Dashboard",
      "Investment Research Tools",
      "Member Collaboration Features",
      "Premium Content Access"
    ],
    color: calicoColors.secondary,
    technologies: ["React", "Chart.js", "Firebase", "Web Sockets"]
  },
  {
    id: "linkedin-analyzer",
    title: "LinkedIn AI Analyzer",
    shortDescription: "Perplexity Powered LinkedIn Post Analysis Tool",
    longDescription: "A Chrome extension that provides real-time AI analysis of LinkedIn posts to help users better understand and engage with content.",
    image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740605007/icon128_mtkiaq.png",
    link: "/projects/linkedin-analyzer",
    category: "Browser Extension",
    highlights: [
      "Real-time Content Analysis",
      "Smart Summaries Generation",
      "Engagement Suggestions",
      "Perplexity AI Integration"
    ],
    color: calicoColors.accent1,
    technologies: ["JavaScript", "Chrome API", "Perplexity AI", "React"]
  },
  {
    id: "squash-notetaker",
    title: "Squash NoteTaker",
    shortDescription: "Apple-inspired AI-powered note taking tool",
    longDescription: "An elegant note-taking Chrome extension with AI capabilities for document analysis and smart organization.",
    image: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740604689/gourd_olk8lm.png",
    link: "/projects/squash-notetaker",
    category: "Productivity",
    highlights: [
      "Beautiful Apple-inspired Design",
      "AI Document Analysis",
      "Multiple File Format Support",
      "Google Gemini Integration"
    ],
    color: calicoColors.accent2,
    technologies: ["JavaScript", "Chrome API", "Google Gemini", "React"]
  }
];

// Animation helpers
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Floating background elements for calico pattern
const FloatingElement = ({ color, top, left, size, delay }: { color: string; top: string; left: string; size: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ 
      duration: 2, 
      delay, 
      repeat: Infinity, 
      repeatType: "reverse" 
    }}
    className="absolute rounded-full blur-3xl"
    style={{
      top,
      left,
      width: size,
      height: size,
      backgroundColor: color,
      zIndex: 0
    }}
  />
);

// Feature Icon component - displays project highlights with animations
const FeatureIcon = ({ text, index }: { text: string; index: number }) => (
  <motion.div
    custom={index}
    variants={fadeInUp}
    className="flex items-center gap-2"
  >
    <div className="rounded-full bg-primary/10 p-1 flex items-center justify-center">
      <Star className="h-3 w-3 text-primary" />
    </div>
    <span className="text-sm">{text}</span>
  </motion.div>
);

// Project Card Component with hover effects and animations
const ProjectCard = ({ project, index, isActive, onClick }: { 
  project: typeof projectsData[0], 
  index: number,
  isActive: boolean,
  onClick: () => void
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer rounded-xl p-1 ${isActive ? 'ring-2 ring-primary' : ''}`}
      onClick={onClick}
    >
      <Card className="overflow-hidden h-full bg-card hover:bg-card/90 transition-colors">
        <div className="relative h-full">
          <div 
            className="absolute inset-0 opacity-10" 
            style={{ backgroundColor: project.color }}
          />
          <div className="p-6 pb-3">
            <div className="mb-3">
              <Badge 
                variant="outline" 
                className="mb-2" 
                style={{ borderColor: project.color, color: project.color }}
              >
                {project.category}
              </Badge>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground line-clamp-2">{project.shortDescription}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 gap-2"
            >
              {project.highlights.slice(0, 2).map((highlight, idx) => (
                <FeatureIcon key={idx} text={highlight} index={idx} />
              ))}
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// Detailed Project Section component
const ProjectDetail = ({ project }: { project: typeof projectsData[0] }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  
  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-20 relative"
    >
      {/* Background calico effect for project detail */}
      <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden" style={{ backgroundColor: project.color }} />
      
      <div className="space-y-8 relative z-10">
        <div>
          <Badge 
            variant="outline" 
            className="mb-2" 
            style={{ borderColor: project.color, color: project.color }}
          >
            {project.category}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-xl text-muted-foreground mb-6">{project.longDescription}</p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Key Features
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {project.highlights.map((highlight, idx) => (
              <FeatureIcon key={idx} text={highlight} index={idx} />
            ))}
          </motion.div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <Button size="lg" asChild>
          <a href={project.link}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="relative h-80 md:h-auto overflow-hidden rounded-xl border"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
          style={project.id === "squash-notetaker" ? { 
            maxHeight: "70%", 
            margin: "0 auto",
            filter: "brightness(0) saturate(100%) invert(65%) sepia(49%) saturate(410%) hue-rotate(336deg) brightness(93%) contrast(92%)"
          } : {}}
        />
      </motion.div>
    </motion.div>
  );
};

// Main Projects Component
export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  
  // Get the active project data
  const activeProjectData = projectsData.find(p => p.id === activeProject);
  
  // Responsive cards display counts
  const getVisibleProjects = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm and below
    }
    return 4; // Default for SSR
  };
  
  const [visibleCards, setVisibleCards] = useState(getVisibleProjects());
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleProjects());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating calico background elements */}
      <FloatingElement color={calicoColors.primary} top="5%" left="10%" size="300px" delay={0} />
      <FloatingElement color={calicoColors.secondary} top="20%" left="75%" size="400px" delay={1.5} />
      <FloatingElement color={calicoColors.accent1} top="60%" left="15%" size="350px" delay={0.5} />
      <FloatingElement color={calicoColors.accent2} top="70%" left="70%" size="250px" delay={2} />
      <FloatingElement color={calicoColors.accent3} top="40%" left="40%" size="300px" delay={1} />
      
      {/* Hero Section with parallax effect */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="h-[50vh] flex flex-col items-center justify-center relative overflow-hidden pt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <div className="inline-block mb-4">
            <Badge 
              variant="outline" 
              className="text-sm font-medium mb-2"
              style={{ borderColor: calicoColors.primary, color: calicoColors.primary }}
            >
              Portfolio
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of innovative software projects spanning web applications, browser extensions, and enterprise solutions.
          </p>
        </motion.div>
        
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
      
      {/* Project Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              isActive={project.id === activeProject}
              onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
            />
          ))}
        </motion.div>
        
        {/* Project Detail Section with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          {activeProject && activeProjectData && (
            <ProjectDetail project={activeProjectData} />
          )}
        </AnimatePresence>
      </div>
      
      {/* Technologies Section */}
      <div className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge 
              variant="outline" 
              className="mb-2"
              style={{ borderColor: calicoColors.secondary, color: calicoColors.secondary }}
            >
              Skills
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Technologies & Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core technologies and frameworks used across my projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Frontend", icon: <Code />, skills: ["React", "Next.js", "TypeScript", "Framer Motion"], color: calicoColors.primary },
              { name: "Backend", icon: <Briefcase />, skills: ["Node.js", "Prisma ORM", "PostgreSQL", "tRPC"], color: calicoColors.secondary },
              { name: "AI/ML", icon: <Brain />, skills: ["LLM Finetuning", "OpenAI API", "RAG+", "AI Agents"], color: calicoColors.accent1 },
              { name: "DevOps", icon: <Rocket />, skills: ["CI/CD", "Git", "DB Branching", "Vercel"], color: calicoColors.accent2 }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full p-4 mb-4" style={{ backgroundColor: `${category.color}20` }}>
                  <div className="text-primary" style={{ color: category.color }}>{category.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                      <ChevronRight className="h-3 w-3" style={{ color: category.color }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="py-16 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-xl relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${calicoColors.primary}10, ${calicoColors.secondary}10, ${calicoColors.accent1}10)` }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00000000] via-primary/30 to-[#00000000]" />
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <Button 
                size="lg" 
                asChild
                style={{ 
                  background: `linear-gradient(135deg, ${calicoColors.primary}, ${calicoColors.secondary})`,
                  border: 'none'
                }}
              >
                <a href="mailto:human@abhishekde.com">
                  Get in Touch <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
                  <a 
                    href="https://www.linkedin.com/in/abhishek-de-574262192/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
                  <a 
                    href="https://x.com/_abhishekde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="X (Twitter) Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
