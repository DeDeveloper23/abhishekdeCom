import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Lightbulb, 
  FileText, 
  Sparkles, 
  Upload, 
  Zap,
  Github,
  Download,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Squash color scheme
const squashColors = {
  primary: "#E2A378", // Squash orange
  secondary: "#B38867", // Dark brown
  accent: "#F0C4A7", // Light peach
  bg: "#FEFAF7", // Off-white
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: custom * 0.1,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
};

// Feature component
const Feature = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card className="h-full hover:shadow-lg transition-shadow border-t-4" style={{ borderTopColor: squashColors.primary }}>
        <CardContent className="p-6 pt-8">
          <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4" style={{ backgroundColor: `${squashColors.primary}30` }}>
            <div style={{ color: squashColors.primary }}>{icon}</div>
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Testimonial component
const Testimonial = ({ 
  quote, 
  author, 
  role,
  index
}: { 
  quote: string; 
  author: string; 
  role: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="text-4xl text-primary mb-4" style={{ color: squashColors.primary }}>"</div>
      <p className="mb-4 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 mr-3" style={{ backgroundColor: `${squashColors.primary}30` }}></div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Main component
export default function SquashNoteTaker() {
  const [activeTab, setActiveTab] = useState("features");
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Beautiful Design",
      description: "Elegant Apple-inspired interface with smooth animations and seamless transitions. A delightful note-taking experience right in your browser."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "AI-Powered Analysis",
      description: "Google Gemini integration for intelligent document analysis. Understand PDFs, Word documents, text files, and even code files with AI assistance."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "File Support",
      description: "Direct file uploads and analysis for multiple formats including PDFs, .docx, .txt, and .py files. Get instant insights and summaries."
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Easy Document Upload",
      description: "Simply drag and drop your files for instant analysis. The AI assistant will automatically extract key information and organize it for you."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Notes",
      description: "Create notes with lightning speed using intuitive shortcuts and AI-assisted formatting. Focus on content, not formatting."
    }
  ];
  
  const testimonials = [
    {
      quote: "Squash NoteTaker transformed how I take notes during research. The AI analysis of PDFs saves me hours every week.",
      author: "Dr. Sarah Chen",
      role: "Research Scientist"
    },
    {
      quote: "The Apple-inspired design is a breath of fresh air compared to other note tools. It's beautiful and functional.",
      author: "Mark Johnson",
      role: "UI Designer"
    },
    {
      quote: "As a developer, I love how it analyzes code files and gives me insights. The customizable themes are a nice touch too.",
      author: "Jamie Rodriguez",
      role: "Software Engineer"
    }
  ];
  
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full" style={{ backgroundColor: squashColors.accent, filter: "blur(100px)" }}></div>
        <div className="absolute top-[60%] right-[10%] w-96 h-96 rounded-full" style={{ backgroundColor: squashColors.primary, filter: "blur(120px)" }}></div>
        <div className="absolute bottom-[5%] left-[30%] w-80 h-80 rounded-full" style={{ backgroundColor: squashColors.secondary, filter: "blur(100px)" }}></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 z-10">
        <motion.div 
          ref={heroRef}
          style={{ opacity: headerOpacity, y: headerY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div variants={floatAnimation} initial="initial" animate="animate">
                  <img 
                    src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740604689/gourd_olk8lm.png" 
                    alt="Squash NoteTaker Logo"
                    className="w-28 h-28 object-contain"
                    style={{ 
                      filter: "brightness(0) saturate(100%) invert(65%) sepia(49%) saturate(410%) hue-rotate(336deg) brightness(93%) contrast(92%)"
                    }}
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 rounded-full opacity-30 blur-md"
                  style={{ backgroundColor: squashColors.primary }}
                  animate={{ 
                    width: ["80%", "95%", "80%"],
                    opacity: [0.2, 0.4, 0.2],
                  }} 
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span style={{ color: squashColors.primary }}>Squash</span> NoteTaker
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Apple-Inspired Note Taking with AI-Powered Document Analysis
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                size="lg" 
                className="px-8 gap-2" 
                style={{ backgroundColor: squashColors.primary }}
              >
                <Download className="h-4 w-4" /> Coming Soon
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://github.com/DeDeveloper23/chrome-notetaker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Badge 
                variant="outline" 
                className="text-sm font-medium"
                style={{ color: squashColors.primary, borderColor: squashColors.primary }}
              >
                Now in Beta
              </Badge>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Video Demo Section */}
      <div className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <Badge 
              variant="outline" 
              className="mb-3 inline-block"
              style={{ color: squashColors.primary, borderColor: squashColors.primary }}
            >
              Watch Demo
            </Badge>
            <h2 className="text-3xl font-bold mb-4">See Squash NoteTaker in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the sleek interface and AI-powered features
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-video relative rounded-2xl overflow-hidden bg-background border shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/gHdK3FM3kyk"
                title="Squash NoteTaker Demo"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full opacity-30" style={{ backgroundColor: squashColors.accent }}></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full opacity-30" style={{ backgroundColor: squashColors.primary }}></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Tabs Section */}
      <div className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Discover Squash NoteTaker</h2>
            
            <Tabs defaultValue="features" value={activeTab} onValueChange={setActiveTab} className="mx-auto">
              <TabsList className="grid grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="interface">Interface</TabsTrigger>
              </TabsList>
            
              <div className="mt-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TabsContent value="features" className="mt-0">
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      >
                        {features.map((feature, index) => (
                          <Feature 
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                          />
                        ))}
                      </motion.div>
                    </TabsContent>
                    
                    <TabsContent value="interface" className="mt-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold mb-4">Elegant, Apple-Inspired Design</h3>
                          <p className="text-muted-foreground mb-6">
                            Squash NoteTaker brings the beauty and simplicity of Apple's design language to your browser. 
                            With clean layouts, thoughtful animations, and meticulous attention to detail, 
                            note-taking becomes a delightful experience.
                          </p>
                          
                          <ul className="space-y-4">
                            {[
                              "Beautiful typography and spacing",
                              "Light and dark mode that follows system preferences",
                              "Smooth animations and transitions",
                              "Intuitive drag and drop interface",
                              "Minimal and distraction-free writing environment"
                            ].map((item, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                              >
                                <div className="rounded-full p-1 bg-primary/10" style={{ backgroundColor: `${squashColors.primary}20` }}>
                                  <Sparkles className="h-4 w-4" style={{ color: squashColors.primary }} />
                                </div>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true, amount: 0.3 }}
                          className="rounded-xl overflow-hidden shadow-2xl border relative"
                        >
                          {/* Image Carousel */}
                          <div className="relative">
                            {/* Carousel Images */}
                            <div className="relative overflow-hidden">
                              <motion.div
                                className="flex transition-transform duration-500 ease-in-out"
                                initial={false}
                                animate={{ x: carouselIndex === 0 ? '0%' : '-100%' }}
                              >
                                <img 
                                  src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740952107/Screenshot_2025-03-02_at_4.46.51_PM_pkrhov.png" 
                                  alt="Squash NoteTaker Interface - View 1" 
                                  className="w-full h-auto min-w-full"
                                />
                                <img 
                                  src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740952107/Screenshot_2025-03-02_at_4.47.43_PM_xbines.png" 
                                  alt="Squash NoteTaker Interface - View 2" 
                                  className="w-full h-auto min-w-full"
                                />
                              </motion.div>
                            </div>
                            
                            {/* Carousel Navigation Buttons */}
                            <button 
                              onClick={() => setCarouselIndex(0)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-primary shadow-md z-10"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="h-6 w-6" style={{ color: squashColors.primary }} />
                            </button>
                            <button 
                              onClick={() => setCarouselIndex(1)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-primary shadow-md z-10"
                              aria-label="Next image"
                            >
                              <ChevronRight className="h-6 w-6" style={{ color: squashColors.primary }} />
                            </button>
                            
                            {/* Carousel Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                              <button
                                onClick={() => setCarouselIndex(0)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${carouselIndex === 0 ? 'bg-primary' : 'bg-white/70'}`}
                                style={{ backgroundColor: carouselIndex === 0 ? squashColors.primary : 'rgba(255, 255, 255, 0.7)' }}
                                aria-label="Go to slide 1"
                              />
                              <button
                                onClick={() => setCarouselIndex(1)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${carouselIndex === 1 ? 'bg-primary' : 'bg-white/70'}`}
                                style={{ backgroundColor: carouselIndex === 1 ? squashColors.primary : 'rgba(255, 255, 255, 0.7)' }}
                                aria-label="Go to slide 2"
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-12 text-center"
          >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br" style={{ 
              backgroundImage: `linear-gradient(135deg, ${squashColors.primary}, ${squashColors.accent})` 
            }}></div>
            
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ 
              backgroundImage: `linear-gradient(90deg, transparent, ${squashColors.primary}, transparent)` 
            }}></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <img 
                  src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740604689/gourd_olk8lm.png" 
                  alt="Squash NoteTaker Logo"
                  className="w-16 h-16 object-contain mx-auto"
                  style={{ 
                    filter: "brightness(0) saturate(100%) invert(65%) sepia(49%) saturate(410%) hue-rotate(336deg) brightness(93%) contrast(92%)"
                  }}
                />
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Note-Taking?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join our beta program and be among the first to experience Squash NoteTaker.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8" 
                  style={{ backgroundColor: squashColors.primary }}
                >
                  Join Beta Waitlist
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://github.com/DeDeveloper23/chrome-notetaker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> View on GitHub
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
