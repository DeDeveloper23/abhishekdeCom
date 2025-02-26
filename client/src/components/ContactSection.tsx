import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/DeDeveloper23" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-de-574262192/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:human@abhishekde.com">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
