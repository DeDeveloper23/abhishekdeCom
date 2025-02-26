import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Lock, Eye, Archive, Server, Check } from "lucide-react";

export default function LinkedInAiInsightPrivacy() {
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
                alt="LinkedIn AI Insight Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">LinkedIn AI Insight Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring transparent data handling practices with our extension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Privacy Policy Content */}
      <div className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-semibold m-0">Overview</h2>
                </div>
                <p>
                  This Privacy Policy explains how LinkedIn AI Insight ("we", "our", or "the extension") collects, uses, and protects 
                  your information when you use our browser extension. We are committed to ensuring the privacy and security of your data.
                </p>
                <p>
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Lock className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-semibold m-0">Information Collection</h2>
                </div>
                <h3 className="text-xl font-semibold mt-4">What Information We Process</h3>
                <p>
                  Our extension processes the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>LinkedIn post content that you explicitly choose to analyze</li>
                  <li>Your Perplexity API key that you provide in the extension settings</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">How We Process Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We process LinkedIn post content <strong>only when you explicitly request analysis</strong> by clicking the analyzer button on a post</li>
                  <li>All content processing occurs locally in your browser</li>
                  <li>Your Perplexity API key is stored locally in your browser's extension storage and is <strong>never transmitted to our servers</strong></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Server className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-semibold m-0">Data Storage and Security</h2>
                </div>
                <h3 className="text-xl font-semibold mt-4">Local Storage</h3>
                <p>
                  The LinkedIn AI Insight extension:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stores your Perplexity API key locally in your browser's secure extension storage</li>
                  <li>Does not maintain any database of user information</li>
                  <li>Does not store or retain any LinkedIn post content after analysis is complete</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Third-Party Services</h3>
                <p>
                  Our extension interacts with the following third-party services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Perplexity AI</strong>: When you request analysis of LinkedIn content, the content is sent to Perplexity AI using your own API key. 
                    Please refer to <a href="https://www.perplexity.ai/hub/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Perplexity's Privacy Policy</a> 
                    for information about how they handle your data.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-semibold m-0">Data Sharing and Disclosure</h2>
                </div>
                <p>
                  We do not collect, store, or share your personal information or LinkedIn content with any third parties, except as described below:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    LinkedIn content that you choose to analyze is sent to Perplexity AI using your own API key. 
                    This is necessary to provide the AI analysis functionality of our extension.
                  </li>
                  <li>
                    We may disclose information if required to do so by law or in the good faith belief that such action is 
                    necessary to comply with legal obligations.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Archive className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-semibold m-0">Data Retention and Deletion</h2>
                </div>
                <p>
                  Our extension does not retain any LinkedIn content after analysis is complete. Your API key is stored 
                  in your browser's local extension storage and is automatically removed when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Manually remove the API key in the extension settings</li>
                  <li>Uninstall the extension from your browser</li>
                  <li>Clear your browser extension data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Check className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-semibold m-0">Your Rights and Choices</h2>
                </div>
                <p>
                  You have the following rights regarding your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Right to Access</strong>: Since we don't collect or store your data on our servers, all your information 
                    is accessible directly from your browser.
                  </li>
                  <li>
                    <strong>Right to Delete</strong>: You can delete your API key at any time from the extension settings, 
                    or by uninstalling the extension.
                  </li>
                  <li>
                    <strong>Right to Opt-Out</strong>: The extension only processes LinkedIn content when you explicitly request analysis, 
                    so you always maintain control over what content is processed.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p>
                  Our extension is not intended for use by individuals under the age of 16. We do not knowingly collect or process 
                  data from children under 16 years of age.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this 
                  Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Through our <a href="https://github.com/DeDeveloper23/LinkedInAiInsight/issues/new" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub repository</a>
                  </li>
                  <li>
                    By email at: <a href="mailto:human@abhishekde.com" className="text-primary hover:underline">human@abhishekde.com</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Try LinkedIn AI Insight?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're committed to providing a privacy-first experience while enhancing your LinkedIn experience with AI insights.
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
