import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function SquashNoteTaker() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740604689/gourd_olk8lm.png" 
                alt="Squash NoteTaker Logo"
                className="w-full h-full object-contain"
                style={{ 
                  filter: "brightness(0) saturate(100%) invert(65%) sepia(49%) saturate(410%) hue-rotate(336deg) brightness(93%) contrast(92%)"
                }}
              />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-[#E2A378]">Squash</h1>
              <h1 className="text-3xl font-bold text-[#E2A378]">NoteTaker</h1>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Apple-Inspired Note Taking with AI-Powered Document Analysis
          </p>
        </motion.div>

        {/* YouTube Video Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Watch Squash NoteTaker in Action</h2>
          <div className="aspect-video relative rounded-2xl overflow-hidden bg-background border shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/3n1tIJUST4Y"
              title="Squash NoteTaker Demo"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Beautiful Design</h3>
              <p className="text-muted-foreground">
                Elegant Apple-inspired interface with smooth animations and
                seamless transitions. A delightful note-taking experience right
                in your browser.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Analysis</h3>
              <p className="text-muted-foreground">
                Google Gemini integration for intelligent document analysis.
                Understand PDFs, Word documents, text files, and even code files
                with AI assistance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">File Support</h3>
              <p className="text-muted-foreground">
                Direct file uploads and analysis for multiple formats including
                PDFs, .docx, .txt, and .py files. Get instant insights and
                summaries.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="prose prose-lg mx-auto"
        >
          <p>
            Squash NoteTaker is a beautiful and intelligent note-taking Chrome
            extension that combines the elegance of Apple's design philosophy
            with the power of AI. Features include:
          </p>

          <ul>
            <li>Sleek, minimalist interface with fluid animations</li>
            <li>Google Gemini AI-powered document analysis</li>
            <li>Support for multiple file formats (PDF, DOCX, TXT, PY)</li>
            <li>Instant summaries and insights</li>
            <li>Seamless file upload and organization</li>
          </ul>

          <div className="mt-8">
            <Button asChild>
              <a 
                href="https://github.com/DeDeveloper23/chrome-notetaker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
