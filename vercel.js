// This is a special file for Vercel to invoke the Express application
import app from './dist/index.js';

// Export the Express app as a serverless function
export default function handler(req, res) {
  // Handle the request directly with the Express app
  return app(req, res);
} 
