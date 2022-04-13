import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { JumplistContext } from '../JumplistContext';
import { IJumplistContext, JumplistNode, JumplistNodes } from '../JumplistContext/types';
import { jumplistReducer } from './reducer';

export const JumplistProvider: React.FC<{
  children: React.ReactNode
  classPrefix?: string
  nodes?: JumplistNodes
}> = (props) => {
  const {
    children,
    classPrefix,
    nodes: nodesFromProps
  } = props;

  const [nodes, dispatchNodes] = useReducer(jumplistReducer, []);
  const [activeJumplistIndex, setActiveJumplistIndex] = useState<number | undefined>();

  useEffect(() => {
    if (nodes) {
      const firstActive = nodes.findIndex((node) => node.isIntersecting);
      setActiveJumplistIndex(firstActive);
    }
  }, [nodes])

  const syncJumplistItem = useCallback((incomingNode: JumplistNode) => {
    dispatchNodes({
      type: 'sync',
      payload: incomingNode
    })
  }, [])

  const removeJumplistItem = useCallback((incomingID: string) => {
    dispatchNodes({
      type: 'remove',
      payload: {
        id: incomingID
      }
    })
  }, []);

  const setJumplist = useCallback((incomingJumplist: JumplistNodes) => {
    dispatchNodes({
      type: 'reset',
      // @ts-ignore TODO: type this better
      payload: incomingJumplist
    })
  }, [])

  const clearJumplist = useCallback(() => {
    dispatchNodes({
      type: 'clear'
    })
  }, [])

  useEffect(() => {
    if (nodesFromProps) {
      setJumplist(nodesFromProps)
    }
  }, [nodesFromProps])

  const context: IJumplistContext = {
    classPrefix,
    jumplist: nodes,
    syncJumplistItem,
    removeJumplistItem,
    setJumplist,
    activeJumplistIndex,
    clearJumplist
  }

  return (
    <JumplistContext.Provider
      value={context}
    >
      {(children && (typeof children === 'function' ? children({ ...context }) : children))}
    </JumplistContext.Provider>
  );
}
