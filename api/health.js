// Standalone serverless function for the health check endpoint
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  
  res.end(JSON.stringify({
    status: 'ok',
    timestamp: new Date().toISOString(),
    handler: 'direct-serverless-function',
    method: req.method
  }));
} 
