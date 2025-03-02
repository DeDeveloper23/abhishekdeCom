import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Search, 
  Brain,
  Shield,
  Users,
  ArrowDownCircle,
  Laptop,
  FileText,
  UserCheck,
  ChevronRight
} from "lucide-react";
import {
  ScrollArea,
  ScrollBar
} from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function AscendHiring() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Create a Custom Job Posting",
      description: "Effortlessly publish job descriptions with the aid of AI that attract top talent across all major job boards.",
      staticImage: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740944800/Screenshot_2025-03-02_at_2.43.59_PM_fm8v8b.png",
      gifImage: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740780669/job_creator_gif_jjdyst.gif"
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Connect Your ATS or CRM",
      description: "Integrate our AI Agent Recruiter into your existing ATS or CRM with support for over 25 platforms, centralizing your hiring workflow.",
      staticImage: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740944800/Screenshot_2025-03-02_at_2.45.54_PM_mqjzdl.png",
      gifImage: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740779659/ScreenRecording2025-01-31at2.04.15PM-ezgif.com-video-to-gif-converter_odmupw.gif"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Rapidly Screen Candidate Resumes",
      description: "Our tailored AI analyzes each resume to provide you with a ranked list of the best candidates, reducing bias and promoting greater opportunity.",
      staticImage: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740944937/Screenshot_2025-03-02_at_2.48.43_PM_cb1opo.png",
      gifImage: ""
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Automate Interview Scheduling",
      description: "Schedule screening calls and interviews with candidates autonomously through our platform. Sort candidates to select the best fit.",
      staticImage: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740945104/Screenshot_2025-03-02_at_2.51.34_PM_fdpy4j.png",
      gifImage: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740945852/automated-scheduling_cuf95c.gif"
    }
  ];

  const integrations = [
    "Fountain", "JobDiva", "Lever", "Greenhouse", "ICIMS", "JazzHR", 
    "Engage ATS", "BambooHR", "ApplicantStack", "Workable", "Polymer", 
    "Recruiterflow", "Workday"
  ];

  const testimonials = [
    {
      logo: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740778673/MT-SINAI-LOGO_zobyda.png",
      company: "Mount Sinai",
      title: "Crafting Custom-built GPT Solutions",
      description: "Mount Sinai's AI & Health department integrated our platform into their process and found their perfect hire with our custom-built Google Scholar integration",
      cta: "Case study coming soon",
      link: ""
    },
    {
      logo: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740778726/CBI_Logo_Color-1_ahs8at.png",
      company: "CB Insights",
      title: "Powering Through Thousands of Applicants",
      description: "CB Insights saved weeks in reviewing resumes and scheduling interviews when they received over 2000+ candidates for a Data Science position",
      cta: "Read case study",
      link: "https://www.ascendhiring.com/cb-insights-case-study"
    },
    {
      logo: "https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740778759/WSU_Logo_Seal_Type_Vt-Wht_rth16e.png",
      company: "Worcester State University",
      title: "Hiring with AI, Diversity, & Inclusion",
      description: "Working with the head of DEI, our software's diverse AI-agent framework helped WSU reduce discriminatory bias to allow for a more inclusive hiring process",
      cta: "Case study coming soon",
      link: ""
    }
  ];

  const blogPosts = [
    {
      category: "AI",
      tag: "Research",
      title: "Transforming Recruitment with AI: A Complete Guide in 2025",
      description: "Today, assuming AI as a replacement is a moving myth. AI in hiring process is the sidekick that is transforming recruitment processes.",
      image: "https://cdn.prod.website-files.com/66219824440af70bb5dfb15c/675333cc2b4e27ee94c92e15_transforming-recruitment-ai.jpg",
      link: "https://www.ascendhiring.com/blog/transforming-recruitment-with-ai-a-complete-guide-in-2025"
    },
    {
      category: "AI",
      tag: "Research",
      title: "Improving Candidate Experience with Automated Interview Scheduling",
      description: "Round 1 = Cleared. Round 2 = Cleared. ...Interview Scheduling = ? This is the biggest problem faced by both recruiters and candidates.",
      image: "https://cdn.prod.website-files.com/66219824440af70bb5dfb15c/675333cdd123b9a6cd31a3c5_improve-candidate-experience.jpg",
      link: "https://www.ascendhiring.com/blog/improve-candidate-experience-with-ai-interview-scheduling"
    },
    {
      category: "AI",
      tag: "Research",
      title: "What is the Role of AI in Recruitment?",
      description: "AI is revolutionizing the recruitment industry, with 43% of Human Resources professionals already using AI in their hiring processes.",
      image: "https://cdn.prod.website-files.com/66219824440af70bb5dfb15c/67609cd6fabb8b76bd20fd10_ai-in-recruitment.jpg",
      link: "https://www.ascendhiring.com/blog/role-of-ai-in-recruitment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-12"
          >
            <div className="md:w-1/2">
              <div className="w-24 h-24 mb-6">
                <img 
                  src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740779038/android-chrome-512x512_talib6.png" 
                  alt="Ascend Hiring Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-5xl font-bold mb-6">The Future of AI Hiring is Here</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our custom AI Agents streamline your recruitment process, saving you time in hiring your dream team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8" asChild>
                <a 
                  href="https://ats.ascendhiring.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Try a Demo
                </a>
              </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://www.ascendhiring.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-50"></div>
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img 
                    src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740778108/Screenshot_2025-02-28_at_4.25.26_PM_nr45if.png" 
                    alt="Ascend Hiring Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-semibold mb-8">Integrates directly into your workflow</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {integrations.map((integration, index) => (
                <div key={index} className="text-muted-foreground px-2">
                  <a href={'https://www.ascendhiring.com/integrations'} target="_blank" rel="noopener noreferrer">
                    {integration}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Launch faster</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Need quality hires quickly? We're here to help. Say goodbye to recruitment roadblocks, 
              and welcome quality and speed to your workforce.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50</p>
                  <p className="text-xl mb-3">hours</p>
                  <p className="text-muted-foreground">Saved Per Week for Recruiters</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">9</p>
                  <p className="text-xl mb-3">days</p>
                  <p className="text-muted-foreground">Quicker Average Onboarding</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">90</p>
                  <p className="text-xl mb-3">%</p>
                  <p className="text-muted-foreground">Reduced Hiring Costs</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">86</p>
                  <p className="text-xl mb-3">%</p>
                  <p className="text-muted-foreground">Increased Hiring Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All-in-One AI-Powered HR Workflow</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our custom-built AI agent framework makes your workflow seamless and easier than ever, 
                letting you focus on doing what you love.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}
                >
                  <div className="flex-1">
                    <div className="mb-6 bg-primary/10 p-4 rounded-full inline-block">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <Button variant="outline" size="sm" className="group">
                       <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      <a href="https://www.ascendhiring.com/features" target="_blank" rel="noopener noreferrer">Get Started</a>
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div 
                      className="relative"
                      onMouseEnter={() => setHoveredStep(index)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-xl blur opacity-30"></div>
                      <div className="relative rounded-xl overflow-hidden border border-border bg-card p-2">
                        <img 
                          src={(step.gifImage && hoveredStep === index) ? step.gifImage : step.staticImage}
                          alt={`Ascend ${step.title} Demo`}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Our AI-powered platform delivers exceptional results with these key features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      Integration with 25+ ATS platforms
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      Automated candidate scheduling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      AI-powered candidate screening
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      100x less biased than human recruiters
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      Customizable workflow automation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      Advanced analytics and reporting
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Time Savings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Search className="h-5 w-5 text-primary mr-2" />
                      10 hours saved on resume screening
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      16 hours saved on scheduling
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      Total of 26 hours saved weekly
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      More time for quality interactions
                    </li>
                    <li className="flex items-center">
                      <Brain className="h-5 w-5 text-primary mr-2" />
                      Reduced decision fatigue
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      Minimize human error and bias
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See who's hiring with Ascend</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Read experiences from teams who found their perfect hire, faster.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6 bg-primary/5 flex items-center justify-center h-24">
                    <div className="w-48 h-12 flex items-center justify-center">
                      <img 
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{testimonial.title}</h3>
                    <p className="text-muted-foreground mb-4">{testimonial.description}</p>
                    {testimonial.link ? (
                      <Button variant="link" className="p-0 h-auto text-primary" asChild>
                        <a 
                          href={testimonial.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {testimonial.cta}
                        </a>
                      </Button>
                    ) : (
                      <Button variant="link" className="p-0 h-auto text-primary">
                        {testimonial.cta}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Latest AI Recruitment Insights</h2>
              <Button variant="outline">
                <a href="https://www.ascendhiring.com/blog" target="_blank" rel="noopener noreferrer">Explore All</a>
              </Button>
              
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-primary">{post.category}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.tag}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Read more
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join teams around the world using Ascend Hiring to revolutionize their hiring processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" asChild>
                <a 
                  href="https://ats.ascendhiring.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Try a Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://www.ascendhiring.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="mt-12 text-muted-foreground">
              <p>info@ascendhiring.com • (609)-250-2499</p>
              <p className="mt-2">© 2025 Ascend Hiring, Inc. All Rights Reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
