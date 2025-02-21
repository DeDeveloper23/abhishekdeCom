import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AiExperience() {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          AI Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Early Days: GPT-2</h3>
            <p className="text-muted-foreground">
              Started with fine-tuning GPT-2 models, exploring the fundamentals of
              language models and their capabilities in understanding context.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">AI Agents</h3>
            <p className="text-muted-foreground">
              Advanced to building full-scale AI agents, focusing on autonomous
              decision-making and complex task execution through natural language
              understanding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">MCP Development</h3>
            <p className="text-muted-foreground">
              Currently developing the Model Context Protocol (MCP) for Developer
              Agents, enabling Cursor's Composer Agent to create and utilize
              DALL-E 3 images autonomously in applications.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="https://github.com/DeDeveloper23/typescript-sdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" className="group">
              View MCP Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
