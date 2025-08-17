const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 2021;

app.use(express.static(__dirname));
app.use(express.json({ limit: '2mb' }));

// Save CSV endpoint
app.post('/save-csv', (req, res) => {
  const { filename, csv } = req.body;
  if (!filename || !csv) {
    return res.status(400).json({ error: 'Missing filename or csv' });
  }
  const filePath = path.join(__dirname, filename);
  fs.writeFile(filePath, csv, err => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save file' });
    }
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
