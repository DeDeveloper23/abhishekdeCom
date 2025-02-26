// Generic API handler for all non-specific API routes
export default function handler(req, res) {
  // Get the path from the request
  const path = req.url.replace(/^\/api/, '') || '/';
  
  // Set a JSON response
  res.setHeader('Content-Type', 'application/json');
  
  // Return info about the API and request
  res.statusCode = 200;
  res.end(JSON.stringify({
    message: 'API is working',
    path: path,
    timestamp: new Date().toISOString(),
    method: req.method,
    query: req.query || {}
  }));
} 
