import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function LinkedInAnalyzer() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">LinkedIn AI Post Analyzer</h1>
          <p className="text-xl text-muted-foreground">
            Instant Content Analysis & Verification with Perplexity AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li>One-click post analysis using Perplexity AI</li>
                <li>Source verification for claims and statements</li>
                <li>In-depth topic exploration</li>
                <li>Browser extension integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
              <ul className="space-y-2">
                <li>Perplexity AI API Integration</li>
                <li>Chrome Extension Architecture</li>
                <li>Real-time Analysis Engine</li>
                <li>Source Verification System</li>
              </ul>
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
            The LinkedIn AI Post Analyzer is a powerful Chrome extension that brings
            the analytical capabilities of Perplexity AI directly to your LinkedIn
            feed. With a simple click, users can:
          </p>

          <ul>
            <li>Verify claims and statements with credible sources</li>
            <li>Deep dive into topics mentioned in posts</li>
            <li>Get AI-powered insights and analysis</li>
            <li>Access related resources and learning materials</li>
          </ul>

          <div className="mt-8">
            <Button asChild>
              <a 
                href="https://github.com/DeDeveloper23/LinkedInAiInsight" 
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