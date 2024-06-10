import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }) => {
  useEffect(() => {
    // Your effect code here for PdfViewer
    console.log('File URL has changed:', fileUrl);
  }, [fileUrl]); // Add fileUrl to the dependency array

  return (
    <div>
      <Document file={fileUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
