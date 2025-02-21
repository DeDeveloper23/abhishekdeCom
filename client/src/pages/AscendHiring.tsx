import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AscendHiring() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Ascend Hiring</h1>
          <p className="text-xl text-muted-foreground">
            AI-Powered Recruitment & Applicant Tracking System
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="aspect-video relative mb-12 rounded-lg overflow-hidden"
        >
          <img
            src="https://cdn.prod.website-files.com/66219824440af70bb5dfb15c/665f547ec7d593ffce9f0c31_candidates-screen.png"
            alt="Ascend Hiring Dashboard"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg mx-auto"
        >
          <p>
            Ascend Hiring is a modern recruitment platform that streamlines the
            hiring process using AI. It helps companies find and hire top talent
            faster and more efficiently.
          </p>
          
          <h2>Key Features</h2>
          <ul>
            <li>AI-powered candidate screening</li>
            <li>Automated interview scheduling</li>
            <li>Custom hiring workflows</li>
            <li>Integration with major job boards</li>
          </ul>

          <div className="mt-8">
            <Button asChild>
              <a href="https://www.ascendhiring.com" target="_blank" rel="noopener noreferrer">
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
