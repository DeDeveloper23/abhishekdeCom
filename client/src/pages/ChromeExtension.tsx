import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ChromeExtension() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Squash NoteTaker</h1>
          <p className="text-xl text-muted-foreground">
            Apple-Inspired Note Taking with AI-Powered Document Analysis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
          transition={{ delay: 0.4 }}
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