import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function CagrClub() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">CAGR Club</h1>
          <p className="text-xl text-muted-foreground">
            Elite Investment Community Platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="aspect-video relative mb-12 rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
            alt="CAGR Club Dashboard"
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
            CAGR Club is an exclusive platform for serious investors focused on
            achieving consistent compound growth. The platform provides advanced
            analytics, expert insights, and a community of like-minded investors.
          </p>
          
          <h2>Key Features</h2>
          <ul>
            <li>Advanced portfolio analytics</li>
            <li>Expert community insights</li>
            <li>Private mastermind groups</li>
            <li>Wealth generation frameworks</li>
          </ul>

          <div className="mt-8">
            <Button asChild>
              <a href="https://cagr.club" target="_blank" rel="noopener noreferrer">
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
