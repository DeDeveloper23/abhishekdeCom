import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ChromeExtension() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Local AI Note Taker</h1>
          <p className="text-xl text-muted-foreground">
            Privacy-First Chrome Extension
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
              <h3 className="text-xl font-semibold mb-4">Local Processing</h3>
              <p>
                All data processing happens locally on your device, ensuring
                complete privacy and security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
              <p>
                Built-in AI capabilities for smart note organization and content
                analysis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Document Analysis</h3>
              <p>
                Intelligent document parsing and summarization features.
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
            This Chrome extension is a powerful note-taking tool that runs
            completely locally. It features built-in AI capabilities for smart
            organization and analysis while maintaining user privacy by
            processing all data on-device.
          </p>
          
          <h2>Key Features</h2>
          <ul>
            <li>100% local processing</li>
            <li>AI-powered note organization</li>
            <li>Document analysis capabilities</li>
            <li>Secure data storage</li>
            <li>Cross-device sync support</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
