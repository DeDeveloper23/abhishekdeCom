import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Users, BookOpen, Calculator, LineChart, PieChart, TrendingUp, Target, Award, Zap, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

// Feature card component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    className="flex flex-col h-full"
  >
    <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
    </Card>
  </motion.div>
);

// Testimonial component
const Testimonial = ({ 
  quote, 
  author, 
  position, 
  index 
}: { 
  quote: string; 
  author: string; 
  position: string; 
  index: number;
}) => (
  <motion.div
    custom={index + 8}
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    className="bg-card rounded-lg p-6 shadow-sm"
  >
    <div className="text-4xl text-primary mb-4">"</div>
    <p className="italic mb-4">{quote}</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{position}</p>
      </div>
    </div>
  </motion.div>
);

// Stat component
const Stat = ({ 
  value, 
  label, 
  index 
}: { 
  value: string; 
  label: string; 
  index: number;
}) => (
  <motion.div
    custom={index + 4}
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    className="text-center"
  >
    <div className="text-4xl font-bold text-primary mb-2">{value}</div>
    <div className="text-muted-foreground">{label}</div>
  </motion.div>
);

export default function CagrClub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Master the Power of <span className="text-primary">Compound Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join an elite community of investors focused on achieving exceptional long-term returns through data-driven strategies and collaborative insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="font-medium">
                  <a href="https://cagr.club">Join CAGR Club</a>
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Explore Features
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-muted-foreground">
                <Award className="h-4 w-4 mr-2" />
                <span>Trusted by investors with $1.2M+ average portfolio value</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dj1cbu9zy/image/upload/v1740607279/Screenshot_2025-02-26_at_5.01.04_PM_wqiehv.png"
                  alt="CAGR Club Dashboard"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 w-48">
                <div className="text-xs text-muted-foreground mb-1">Portfolio CAGR</div>
                <div className="text-2xl font-bold text-primary">+18.7%</div>
                <div className="h-2 bg-primary/20 rounded-full mt-2">
                  <div className="h-2 bg-primary rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-4 w-48">
                <div className="text-xs text-muted-foreground mb-1">Market Outperformance</div>
                <div className="text-2xl font-bold text-green-500">+7.2%</div>
                <div className="h-2 bg-green-200 rounded-full mt-2">
                  <div className="h-2 bg-green-500 rounded-full w-2/3"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="$1.2M+" label="Average Portfolio Size" index={0} />
            <Stat value="18.7%" label="Average Member CAGR" index={1} />
            <Stat value="5,000+" label="Active Investors" index={2} />
            <Stat value="24/7" label="Expert Support" index={3} />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            custom={0}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Powerful Tools for Serious Investors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CAGR Club combines advanced analytics, community wisdom, and educational resources to help you achieve exceptional returns.
            </p>
          </motion.div>

          <Tabs defaultValue="analytics" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="analytics">Portfolio Analytics</TabsTrigger>
              <TabsTrigger value="community">Investment Community</TabsTrigger>
              <TabsTrigger value="education">Educational Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<Calculator className="h-6 w-6 text-primary" />}
                  title="CAGR Calculator"
                  description="Calculate compound annual growth rates for investments over various time periods with customizable parameters."
                  index={1}
                />
                <FeatureCard
                  icon={<PieChart className="h-6 w-6 text-primary" />}
                  title="Portfolio Manager"
                  description="Build and analyze custom investment portfolios with real-time allocation adjustments and risk assessment."
                  index={2}
                />
                <FeatureCard
                  icon={<LineChart className="h-6 w-6 text-primary" />}
                  title="Performance Tracking"
                  description="Monitor individual stock and overall portfolio performance with historical CAGR metrics and benchmarking."
                  index={3}
                />
              </div>
              <div className="mt-8 aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="CAGR Club Analytics Dashboard"
                  className="object-cover w-full h-full"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<Users className="h-6 w-6 text-primary" />}
                  title="Expert Network"
                  description="Connect with experienced investors and industry veterans who share their insights and strategies."
                  index={1}
                />
                <FeatureCard
                  icon={<Brain className="h-6 w-6 text-primary" />}
                  title="Mastermind Groups"
                  description="Join specialized groups focused on specific investment strategies, sectors, or asset classes."
                  index={2}
                />
                <FeatureCard
                  icon={<TrendingUp className="h-6 w-6 text-primary" />}
                  title="Knowledge Sharing"
                  description="Access exclusive insights, research, and investment theses from top-performing community members."
                  index={3}
                />
              </div>
              <div className="mt-8 aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="CAGR Club Community"
                  className="object-cover w-full h-full"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<BookOpen className="h-6 w-6 text-primary" />}
                  title="Interactive Learning"
                  description="Live mentoring sessions with industry professionals and structured learning paths for investors at all levels."
                  index={1}
                />
                <FeatureCard
                  icon={<BarChart3 className="h-6 w-6 text-primary" />}
                  title="Market Analysis"
                  description="Real-time market discussions and case studies to help you understand market trends and opportunities."
                  index={2}
                />
                <FeatureCard
                  icon={<Target className="h-6 w-6 text-primary" />}
                  title="Investment Frameworks"
                  description="Access to proven wealth generation strategies and methodologies for long-term investment success."
                  index={3}
                />
              </div>
              <div className="mt-8 aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80"
                  alt="CAGR Club Education"
                  className="object-cover w-full h-full"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why CAGR Club Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            custom={7}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why CAGR Club Stands Out</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike general investment platforms, we focus specifically on the power of compound growth for serious investors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              custom={8}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Focus on Compound Growth</h3>
                    <p className="text-muted-foreground">
                      We specifically emphasize the power of compound annual growth rate as the key metric for long-term wealth building.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Elite Community</h3>
                    <p className="text-muted-foreground">
                      Our platform targets serious investors with substantial portfolios who are committed to achieving above-market returns.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center shrink-0">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">
                      We leverage historical stock data and advanced analytics to provide actionable investment intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              custom={9}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
                  alt="CAGR Club Dashboard"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-sm">Compound Growth</div>
                </div>
                <div className="text-3xl font-bold">$100K → $1M</div>
                <div className="text-sm text-muted-foreground mt-1">in 15 years at 16.7% CAGR</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            custom={10}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful investors who have transformed their investment approach with CAGR Club.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="CAGR Club has completely transformed my investment strategy. The analytics tools and community insights have helped me achieve a 22% CAGR over the past 3 years."
              author="Michael Chen"
              position="Tech Executive & Angel Investor"
              index={0}
            />
            <Testimonial
              quote="The mastermind groups are invaluable. I've learned more from fellow members in 6 months than I did in 5 years of investing on my own."
              author="Sarah Johnson"
              position="Portfolio Manager"
              index={1}
            />
            <Testimonial
              quote="The focus on compound growth has been eye-opening. The educational resources helped me restructure my portfolio for long-term wealth building."
              author="David Rodriguez"
              position="Real Estate Investor"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform origin-top-right"></div>
            
            <div className="relative z-10 max-w-3xl">
              <motion.div
                custom={11}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-4xl font-bold mb-6">Ready to Master Compound Growth?</h2>
                <p className="text-xl mb-8">
                  Join CAGR Club today and get access to our complete suite of investment tools, community resources, and educational content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="font-medium">
                    <a href="https://cagr.club">Join CAGR Club</a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required. Unlimited Free Tier.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">CAGR Club</h3>
              <p className="text-muted-foreground mb-4">
                The elite investment community focused on compound growth and long-term wealth building.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Portfolio Analytics</li>
                <li>CAGR Calculator</li>
                <li>Investment Community</li>
                <li>Educational Resources</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Disclaimers</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CAGR Club. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
