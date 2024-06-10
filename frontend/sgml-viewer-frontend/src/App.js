import React, { useState, useEffect } from 'react';
import './App.css';
import TreeViewComponent from './components/TreeView';
import PdfViewer from './components/PdfViewer';

const App = () => {
  const [treeData, setTreeData] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    // Fetch tree data and pdf URL from backend
    const fetchData = async () => {
      try {
        // Perform your data fetching here
        const response = await fetch('your_backend_endpoint');
        const data = await response.json();
        // Set the fetched data to state
        setTreeData(data.treeData);
        setPdfUrl(data.pdfUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // This empty dependency array indicates that this effect runs only once on component mount

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
