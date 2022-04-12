import React, { useCallback, useState } from 'react';
import { JumplistContext } from '../JumplistContext';

export const JumplistProvider: React.FC<{
  children: React.ReactNode
  classPrefix?: string
}> = (props) => {
  const {
    children,
    classPrefix
  } = props;

  const [nodes, setNodes] = useState([]);

  const syncNode = useCallback(() => {
    setNodes([]);
  }, [])

  const removeNode = useCallback(() => {
    setNodes([]);
  }, []);

  const context = {
    classPrefix,
    nodes,
    syncNode: syncNode,
    removeNode: removeNode,
  }

  return (
    <JumplistContext.Provider
      value={context}
    >
      {(children && (typeof children === 'function' ? children({ ...context }) : children))}
    </JumplistContext.Provider>
  );
}
