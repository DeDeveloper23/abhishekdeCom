import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
            Smart Content Analysis Tool
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
                <li>AI-powered content analysis</li>
                <li>Engagement predictions</li>
                <li>Writing suggestions</li>
                <li>Performance tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
              <ul className="space-y-2">
                <li>Natural Language Processing</li>
                <li>Machine Learning Models</li>
                <li>LinkedIn API Integration</li>
                <li>Real-time Analytics</li>
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
            The LinkedIn AI Post Analyzer helps content creators optimize their
            LinkedIn posts for maximum engagement. Using advanced AI algorithms,
            it analyzes content quality, predicts performance, and provides
            actionable recommendations.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
