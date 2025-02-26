// This is a special file for Vercel to invoke the Express application
import app from './dist/index.js';

// Export the Express app as a serverless function handler
export default function (req, res) {
  // In a serverless function, we need to ensure the app handles the request
  // Express apps have a .handle method that processes requests
  return app.handle(req, res);
} 
