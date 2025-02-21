import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
            AI Agent Recruiters Framework for Intelligent Hiring
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
                <li>Integration with 25+ ATS platforms (Greenhouse, Lever, Ashby, Workday, etc.)</li>
                <li>Automated candidate scheduling with calendar optimization</li>
                <li>AI-powered candidate screening and ranking</li>
                <li>100x less biased than human recruiters</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Time Savings</h3>
              <ul className="space-y-2">
                <li>10 hours saved per week on resume screening</li>
                <li>16 hours saved per week on scheduling</li>
                <li>Total of 26 hours saved per recruiter weekly</li>
                <li>More time for quality candidate interactions</li>
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
            Ascend Hiring revolutionizes recruitment with a framework of AI Agent Recruiters 
            that streamline the entire hiring process. Our intelligent agents seamlessly 
            integrate with your existing ATS to find and schedule the best talent automatically.
          </p>

          <h2>How It Works</h2>
          <ul>
            <li>AI agents analyze your existing ATS database to identify top candidates</li>
            <li>Automatic scheduling optimizes recruiter and hiring manager calendars</li>
            <li>Bias detection agent ensures fair and equitable candidate evaluation</li>
            <li>Intelligent automation reduces manual tasks by 26 hours per week</li>
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