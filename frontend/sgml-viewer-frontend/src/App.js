import React, { useState } from 'react';
import './App.css';
import TreeViewComponent from './components/TreeView';
import PdfViewer from './components/PdfViewer';

const App = () => {
  const [treeData, setTreeData] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Placeholder data for testing
  const sampleTreeData = {
    id: 1,
    name: 'Chapter 1',
    children: [
      {
        id: 2,
        name: 'Section 1.1',
        children: [{ id: 3, name: 'Subsection 1.1.1' }],
      },
    ],
  };

  const samplePdfUrl = 'path/to/sample.pdf';

  useEffect(() => {
    // Fetch tree data and pdf URL from backend
    setTreeData(sampleTreeData);
    setPdfUrl(samplePdfUrl);
  }, []);

  return (
    <div className="App">
      <div className="left-pane">
        <TreeViewComponent treeData={treeData} />
      </div>
      <div className="right-pane">
        <PdfViewer fileUrl={pdfUrl} />
      </div>
    </div>
  );
};

export default App;
