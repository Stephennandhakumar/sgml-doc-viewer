import React, { useEffect } from 'react';
import { TreeView, TreeItem } from '@material-ui/lab';

const TreeViewComponent = ({ treeData }) => {
  useEffect(() => {
    // Your effect code here for TreeViewComponent
    console.log('Tree data has changed:', treeData);
  }, [treeData]); // Add treeData to the dependency array

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id.toString()} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView>
      {treeData && renderTree(treeData)}
    </TreeView>
  );
};

export default TreeViewComponent;
