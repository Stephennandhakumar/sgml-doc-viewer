import React from 'react';
import { TreeView, TreeItem } from '@material-ui/lab';

const TreeViewComponent = ({ treeData }) => {
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
