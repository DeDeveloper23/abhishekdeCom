import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check, Shield, Clock, Brain, MessageSquare, Lightbulb, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LinkedInAnalyzer() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center mb-12 text-center"
          >
            <div className="w-24 h-24 mb-6">
              <img 
                src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740605007/icon128_mtkiaq.png" 
                alt="LinkedIn AI Analyzer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">LinkedIn AI Post Analyzer</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your LinkedIn experience with AI-powered insights that help you understand 
              and engage with content more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                <span>Coming Soon</span>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://github.com/DeDeveloper23/LinkedInAiInsight" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What It Does Section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">🤖 What It Does</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Brain className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
                  <p className="text-muted-foreground">
                    Analyzes LinkedIn posts and articles in real-time with Perplexity AI integration
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quick Summaries</h3>
                  <p className="text-muted-foreground">
                    Provides instant summaries and key takeaways from lengthy posts
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Discussion Points</h3>
                  <p className="text-muted-foreground">
                    Generates thoughtful discussion points to enhance your engagement
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Lightbulb className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Topic Insights</h3>
                  <p className="text-muted-foreground">
                    Helps you understand complex industry topics with AI-assisted explanations
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ExternalLink className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Source Verification</h3>
                  <p className="text-muted-foreground">
                    Verifies claims and statements with credible sources
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Follow-up Questions</h3>
                  <p className="text-muted-foreground">
                    Suggests relevant follow-up questions to deepen your understanding
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Demonstration Section */}
      <div className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">See It In Action</h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              Watch how the LinkedIn AI Post Analyzer transforms your LinkedIn experience in real-time
            </p>
            
            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/l_qrytw0ZCw?autoplay=0&rel=0" 
                  title="LinkedIn AI Post Analyzer Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                This demonstration shows how the extension seamlessly integrates with your LinkedIn feed,
                providing instant AI-powered insights with just one click.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">✨ Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-muted-foreground">
                    Quickly grasp the essence of long posts without reading every word
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Meaningful Engagement</h3>
                  <p className="text-muted-foreground">
                    Engage more thoughtfully in professional discussions with AI-generated insights
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                  <p className="text-muted-foreground">
                    Keep up with industry trends through AI-assisted explanations of complex topics
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Insightful Comments</h3>
                  <p className="text-muted-foreground">
                    Generate more thoughtful comments and responses to stand out in your network
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enhanced Networking</h3>
                  <p className="text-muted-foreground">
                    Build stronger professional connections through better understanding of content
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Professionals</h3>
                  <p className="text-muted-foreground">
                    Staying up-to-date with industry news and trends
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Job Seekers</h3>
                  <p className="text-muted-foreground">
                    Understanding company cultures and industry requirements
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Networkers</h3>
                  <p className="text-muted-foreground">
                    Wanting to engage meaningfully with their connections
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Anyone</h3>
                  <p className="text-muted-foreground">
                    Looking to maximize their LinkedIn experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Privacy & Getting Started */}
      <div className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Tabs defaultValue="privacy" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              </TabsList>
              
              <TabsContent value="privacy" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <Shield className="h-10 w-10 text-primary" />
                      <h3 className="text-2xl font-semibold">🔒 Privacy & Security</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1" />
                        <p>Works with your own Perplexity API key</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1" />
                        <p>No data storage or collection</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1" />
                        <p>Operates locally within your browser</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1" />
                        <p>Respects LinkedIn's terms of service</p>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-muted-foreground">
                      We take your privacy seriously. The LinkedIn AI Post Analyzer extension 
                      processes all content locally in your browser and requires your own 
                      Perplexity API key. We never store or collect your LinkedIn data or API key.
                    </p>
                    
                    <div className="mt-6">
                      <Button variant="outline" asChild>
                        <a href="/projects/linkedin-ai-insight/privacy" className="inline-flex items-center">
                          View Full Privacy Policy <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="getting-started" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6">Get Started in Minutes</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          1
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Install the extension</h4>
                          <p className="text-muted-foreground">
                            Download and install the LinkedIn AI Post Analyzer from the Chrome Web Store (coming soon)
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          2
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Add your Perplexity API key</h4>
                          <p className="text-muted-foreground">
                            Enter your Perplexity API key in the extension settings (available at perplexity.ai)
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          3
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Start exploring LinkedIn with AI-powered insights!</h4>
                          <p className="text-muted-foreground">
                            Browse your LinkedIn feed and click the analyzer button on any post to get instant insights
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                        <strong>Note:</strong> Requires a Perplexity API key (available at perplexity.ai)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your LinkedIn Experience?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join our waitlist to be notified when the LinkedIn AI Post Analyzer is available for download.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <span>Coming Soon</span>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://github.com/DeDeveloper23/LinkedInAiInsight" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
