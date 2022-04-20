import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { JumplistContext } from '../JumplistContext';
import { IJumplistContext, JumplistNode, JumplistNodes } from '../JumplistContext';
import { jumplistReducer } from './reducer';

export type ChildFunction = (context: IJumplistContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export const JumplistProvider: React.FC<{
  classPrefix?: string
  nodes?: JumplistNodes
  rootMargin?: string
  threshold?: number
  children: React.ReactNode | ChildFunction
}> = (props) => {
  const {
    children,
    classPrefix,
    nodes: nodesFromProps,
    rootMargin,
    threshold
  } = props;

  const [nodes, dispatchNodes] = useReducer(jumplistReducer, []);
  const [currentJumplistIndex, setCurrentJumplistIndex] = useState<number | undefined>(); // could be -1 if no nodes are intersecting
  const [activeJumplistIndex, setActiveJumplistIndex] = useState<number | undefined>(); // a memoized version of `activeJumplistIndex` to track the last-known index

  useEffect(() => {
    if (nodes) {
      const firstActive = nodes.findIndex((node) => node.isIntersecting);
      setCurrentJumplistIndex(firstActive);
    }
  }, [nodes])

  useEffect(() => {
    if (currentJumplistIndex !== undefined && currentJumplistIndex > -1) {
      setActiveJumplistIndex(currentJumplistIndex);
    }
  }, [currentJumplistIndex])

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
        nodeID: incomingID
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
    currentJumplistIndex,
    activeJumplistIndex,
    setActiveJumplistIndex,
    clearJumplist,
    rootMargin,
    threshold
  }

  return (
    <JumplistContext.Provider
      value={context}
    >
      {(children && (typeof children === 'function' ? children({ ...context }) : children))}
    </JumplistContext.Provider>
  );
}
