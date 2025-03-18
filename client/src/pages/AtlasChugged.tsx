import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Globe, 
  Map, 
  Video, 
  Navigation, 
  Locate,
  Github,
  ChevronLeft,
  ChevronRight,
  Youtube,
  Play
} from "lucide-react";

// Calico color scheme
const calicoColors = {
  primary: "#E2A378", // Warm orange
  secondary: "#A69F98", // Warm gray
  accent: "#F5E6D3", // Cream
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

const scaleOnHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

const rotateOnHover = {
  initial: { rotate: 0 },
  hover: { 
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.5 }
  }
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
      whileHover={{ scale: 1.05 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow border-t-4" style={{ borderTopColor: calicoColors.primary }}>
        <CardContent className="p-6 pt-8">
          <motion.div 
            className="rounded-full w-12 h-12 flex items-center justify-center mb-4" 
            style={{ backgroundColor: `${calicoColors.primary}30` }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ color: calicoColors.primary }}>{icon}</div>
          </motion.div>
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
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4 text-xl italic text-gray-700">"{quote}"</div>
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-muted-foreground">{role}</div>
    </motion.div>
  );
};

export default function AtlasChugged() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  
  const [activeTab, setActiveTab] = useState("overview");
  const overviewRef = useRef(null);
  const isOverviewInView = useInView(overviewRef, { once: true });
  
  const features = [
    {
      icon: <Map size={24} />,
      title: "Real-time Location Mapping",
      description: "Visualize locations mentioned in YouTube videos on an interactive map as they're being discussed."
    },
    {
      icon: <Youtube size={24} />,
      title: "YouTube Integration",
      description: "Works with any YouTube video URL, providing seamless integration with the world's largest video platform."
    },
    {
      icon: <Locate size={24} />,
      title: "Spatial Context",
      description: "Understand the geographical relationships between locations mentioned in videos for better comprehension."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Coverage",
      description: "Maps locations from anywhere in the world, providing a truly global perspective on video content."
    },
    {
      icon: <Video size={24} />,
      title: "Synchronized Playback",
      description: "Map markers appear in sync with the video playback, creating a cohesive viewing experience."
    },
    {
      icon: <Navigation size={24} />,
      title: "Interactive Navigation",
      description: "Click on map markers to jump to the exact moment in the video where that location is mentioned."
    }
  ];
  
  const testimonials = [
    {
      quote: "Atlas Chugged completely changed how I watch travel vlogs. Being able to see the exact locations on a map makes planning my own trips so much easier!",
      author: "Sarah K.",
      role: "Travel Enthusiast"
    },
    {
      quote: "As a geography teacher, this tool is invaluable for my classroom. It helps students visualize global events and locations discussed in educational videos.",
      author: "Mark T.",
      role: "High School Geography Teacher"
    },
    {
      quote: "I use Atlas Chugged to follow along with news reports. Seeing where events are taking place gives me a much better understanding of world affairs.",
      author: "James L.",
      role: "News Junkie"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-[#FEFAF7]">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E2A378]/90 via-[#A69F98]/90 to-[#F5E6D3]/90 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740779038/world-map-background_rvxnqm.jpg')", 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Atlas Chugged</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Visualize YouTube videos on a real-time map to understand the geographical context of what you're watching
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100"
                  style={{ color: calicoColors.primary }}
                  onClick={() => window.open("https://atlas.abhishekde.com/", "_blank")}
                >
                  <Globe className="mr-2 h-5 w-5" /> Launch App
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={() => {
                    const overviewElement = document.getElementById("overview");
                    if (overviewElement) {
                      overviewElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating map pins */}
        <motion.div 
          className="absolute top-1/4 left-1/4"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "0s" }}
        >
          <div className="w-8 h-8 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"
               style={{ backgroundColor: calicoColors.primary }}></div>
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/3"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-6 h-6 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"
               style={{ backgroundColor: calicoColors.secondary }}></div>
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-1/4"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-10 h-10 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"
               style={{ backgroundColor: calicoColors.accent }}></div>
        </motion.div>
      </motion.div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Overview Tab */}
          <TabsContent value="overview" id="overview">
            <div ref={overviewRef} className="max-w-4xl mx-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isOverviewInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeInUp} custom={0}>
                  <h2 className="text-3xl font-bold mb-6">Understand the World Through Video</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Atlas Chugged transforms how you watch YouTube videos by providing real-time geographical context. As locations are mentioned in a video, they appear on an interactive map, helping you visualize spatial relationships and better understand the content.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Whether you're watching travel vlogs, news reports, educational content, or documentaries, Atlas Chugged adds a new dimension to your viewing experience by answering the question: "Where exactly is that?"
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge 
                      className="hover:bg-primary/20" 
                      style={{ 
                        backgroundColor: `${calicoColors.primary}10`,
                        color: calicoColors.primary
                      }}
                    >
                      YouTube Integration
                    </Badge>
                    <Badge 
                      className="hover:bg-secondary/20"
                      style={{ 
                        backgroundColor: `${calicoColors.secondary}10`,
                        color: calicoColors.secondary
                      }}
                    >
                      Real-time Mapping
                    </Badge>
                    <Badge 
                      className="hover:bg-accent/20"
                      style={{ 
                        backgroundColor: `${calicoColors.accent}30`,
                        color: calicoColors.primary
                      }}
                    >
                      Interactive Experience
                    </Badge>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button 
                      style={{ backgroundColor: calicoColors.primary }}
                      className="hover:opacity-90 text-white"
                      onClick={() => window.open("https://atlas.abhishekde.com/", "_blank")}
                    >
                      Try It Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp} 
                  custom={1}
                  className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/xiDQAm4f3K4"
                    title="Atlas Chugged Demo"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                custom={2}
                className="mt-20 p-8 rounded-lg border"
                style={{ 
                  backgroundColor: `${calicoColors.accent}30`,
                  borderColor: calicoColors.primary
                }}
              >
                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                <ol className="list-decimal list-inside space-y-4 text-lg">
                  <motion.li 
                    className="text-gray-800"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-medium">Paste a YouTube URL</span> - Enter any YouTube video URL into Atlas Chugged
                  </motion.li>
                  <motion.li 
                    className="text-gray-800"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-medium">Watch the video</span> - The video plays normally within the Atlas Chugged interface
                  </motion.li>
                  <motion.li 
                    className="text-gray-800"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-medium">See locations in real-time</span> - As locations are mentioned, they appear as pins on the interactive map
                  </motion.li>
                  {/* <motion.li 
                    className="text-gray-800"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-medium">Interact with the map</span> - Click on pins to jump to that moment in the video
                  </motion.li> */}
                </ol>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Features Tab */}
          <TabsContent value="features">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Key Features
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
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
              
              <motion.div 
                className="mt-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-center mb-8">Technical Implementation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border-none shadow-lg overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1741879920/atlas_screenshot_v6h638.png" 
                          alt="Atlas Chugged Architecture" 
                          className="w-full h-auto rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Built With Modern Technologies</h4>
                    <ul className="space-y-3">
                      {[
                        { title: "YouTube API", desc: "For video playback and synchronization" },
                        { title: "Mapbox API", desc: "For interactive mapping capabilities" },
                        { title: "OpenAI API", desc: "To identify location mentions in video transcripts" },
                        { title: "React", desc: "For a responsive and interactive user interface" },
                        { title: "Node.js Backend", desc: "For processing video content and extracting location data" }
                      ].map((tech, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="mr-3 mt-1" style={{ color: calicoColors.primary }}>
                            <ChevronRight size={16} />
                          </div>
                          <div>
                            <span className="font-medium">{tech.title}</span> - {tech.desc}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What Users Are Saying
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {testimonials.map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    index={index}
                  />
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-20 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Ready to Try Atlas Chugged?</h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Experience YouTube videos in a whole new way by visualizing locations in real-time.
                </p>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button 
                    size="lg" 
                    style={{ backgroundColor: calicoColors.primary }}
                    className="hover:opacity-90 text-white"
                    onClick={() => window.open("https://atlas.abhishekde.com/", "_blank")}
                  >
                    Launch Atlas Chugged <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* CTA Section */}
      <div className="py-16" style={{ background: `linear-gradient(to right, ${calicoColors.primary}, ${calicoColors.secondary})` }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Start Exploring the World Through Video</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Atlas Chugged brings a new dimension to your YouTube viewing experience by mapping locations in real-time.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100"
                style={{ color: calicoColors.primary }}
                onClick={() => window.open("https://atlas.abhishekde.com/", "_blank")}
              >
                <Globe className="mr-2 h-5 w-5" /> Launch Atlas Chugged
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <motion.h3 
                className="text-xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Atlas Chugged
              </motion.h3>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Visualize YouTube videos on a map
              </motion.p>
            </div>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white"
                  onClick={() => window.open("https://atlas.abhishekde.com/", "_blank")}
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white"
                  onClick={() => window.open("https://github.com/yourusername/atlas-chugged", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="mt-6 text-center text-gray-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Abhishek De. All rights reserved.
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
