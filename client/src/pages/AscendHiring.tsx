import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Search, 
  Brain,
  Shield,
  Clock4,
  Users,
  ArrowDownCircle
} from "lucide-react";
import {
  ScrollArea,
  ScrollBar
} from "@/components/ui/scroll-area";

export default function AscendHiring() {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Scan ATS Database",
      description: "AI agents analyze your existing ATS database to identify the most qualified candidates"
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Smart Evaluation",
      description: "Advanced AI algorithms rank candidates based on job requirements and company culture fit"
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Automatic Scheduling",
      description: "Intelligent calendar optimization for seamless interview scheduling"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Bias Prevention",
      description: "Specialized AI agent ensures fair and equitable candidate evaluation"
    }
  ];

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
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Integration with 25+ ATS platforms
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Automated candidate scheduling
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  AI-powered candidate screening
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  100x less biased than human recruiters
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Time Savings</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Search className="h-5 w-5 text-primary mr-2" />
                  10 hours saved on resume screening
                </li>
                <li className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  16 hours saved on scheduling
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Total of 26 hours saved weekly
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  More time for quality interactions
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex p-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex-none w-[300px] p-4"
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        {step.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-normal">
                        {step.description}
                      </p>
                      {index < steps.length - 1 && (
                        <ArrowDownCircle className="h-6 w-6 text-muted-foreground mx-auto mt-4 rotate-90" />
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="prose prose-lg mx-auto"
        >
          <p>
            Ascend Hiring revolutionizes recruitment with a framework of AI Agent Recruiters 
            that streamline the entire hiring process. Our intelligent agents seamlessly 
            integrate with your existing ATS to find and schedule the best talent automatically.
          </p>

          <div className="mt-8 text-center">
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