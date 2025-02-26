import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";

// Create the Express application
const app = express();

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add logging middleware for API requests
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Add direct API routes before registering other routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'unknown'
  });
});

// Initialize the server without starting it
// This function handles all setup and only starts listening if not in serverless
const initializeServer = async () => {
  // Register API routes
  const server = await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Setup static file serving or dev environment
  if (process.env.NODE_ENV !== "production") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Only start the HTTP server if not in Vercel
  if (!process.env.VERCEL) {
    const port = process.env.PORT || 5000;
    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      log(`Server listening on port ${port}`);
    });
  } else {
    log('Running in Vercel environment - configured as serverless function');
  }

  return app;
};

// Initialize in non-serverless environments
if (!process.env.VERCEL) {
  initializeServer();
} else {
  // In serverless, just do the initialization immediately
  // but don't wait for it to complete before exporting the app
  initializeServer().catch(err => {
    console.error('Error initializing server:', err);
  });
}

// Export the Express app for serverless environments
export default app;
