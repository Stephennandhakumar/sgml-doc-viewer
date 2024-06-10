const express = require('express');
const router = express.Router();
const path = require('path');
const { convertSGMLtoPDF } = require('../utils/convert-sgml-to-pdf');

// Define the route for converting SGML to PDF
router.post('/convert', async (req, res) => {
  const { sgmlContent } = req.body; // Assume SGML content is sent in the request body

  if (!sgmlContent) {
    return res.status(400).send('SGML content is required');
  }

  try {
    const outputPath = path.join(__dirname, '../output', 'output.pdf');
    await convertSGMLtoPDF(sgmlContent, outputPath);
    res.download(outputPath, 'output.pdf', (err) => {
      if (err) {
        console.error('Error sending the file:', err);
        res.status(500).send('Error sending the file');
      }
    });
  } catch (error) {
    console.error('Error converting SGML to PDF:', error);
    res.status(500).send('Error converting SGML to PDF');
  }
});

module.exports = router;
