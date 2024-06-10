const fs = require('fs');
const xml2js = require('xml2js');
const { PDFDocument, rgb } = require('pdf-lib');

// Function to parse SGML to JSON
const parseSGML = (sgml) => {
  const parser = new xml2js.Parser({ explicitArray: false });
  return new Promise((resolve, reject) => {
    parser.parseString(sgml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

// Function to create a PDF from JSON data
const createPDF = async (data, outputPath) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { width, height } = page.getSize();

  // Example: Adding text content from parsed data
  page.drawText(JSON.stringify(data, null, 2), {
    x: 50,
    y: height - 50,
    size: 12,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
};

// Function to read SGML file, parse it, and create a PDF
const convertSGMLtoPDF = async (sgmlContent, outputPath) => {
  try {
    const jsonData = await parseSGML(sgmlContent);
    await createPDF(jsonData, outputPath);
    console.log('PDF created successfully');
  } catch (error) {
    console.error('Error converting SGML to PDF:', error);
  }
};

module.exports = { convertSGMLtoPDF };
