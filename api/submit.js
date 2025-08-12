// /api/submit.js

// Import the Datadog tracer and initialize it
const tracer = require('dd-trace').init({
  logInjection: true,
  service: 'adb-workshop-backend'
});

// This is our serverless function handler
module.exports = (req, res) => {
  // Get the project name from the request body
  const { projectName } = req.body;

  if (!projectName) {
    return res.status(400).json({ error: 'Project name is required.' });
  }

  // Simulate creating a project and returning an ID
  const newProjectId = `TRACED-PROJ-${Date.now()}`;

  // Set the response headers
  res.setHeader('Content-Type', 'application/json');
  
  // Send the successful response
  res.status(200).json({
    message: `Success! Your new project ID is ${newProjectId}.`,
    projectId: newProjectId
  });
};