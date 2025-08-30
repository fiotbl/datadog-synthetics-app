const express = require('express');

require('dd-trace').init({ logInjection: true, service: 'adb-workshop-backend' });

const app = express();
app.use(express.json());
app.use(express.static(__dirname));  // serve index.html, dashboard.html, etc.

// /api/config endpoint (for RUM init)
app.get('/api/config', (req, res) => {
  console.log('[config] sending RUM config');  // visible in Datadog logs
  res.json({
    clientToken: process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN || '',
    applicationId: process.env.NEXT_PUBLIC_DD_APPLICATION_ID || '',
  });
});

// /api/submit endpoint (traced + logs)
app.post('/api/submit', (req, res) => {
  const { projectName } = req.body || {};
  console.log('[submit] body=%j', req.body);
  if (!projectName) return res.status(400).json({ error: 'Project name is required.' });
  const projectId = `TRACED-PROJ-${Date.now()}`;
  console.log('[submit] created projectId=%s', projectId);
  res.json({ message: `Success! Your new project ID is ${projectId}.`, projectId });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
