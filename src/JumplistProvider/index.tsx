import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import JumplistContext, { IJumplistContext, JumplistNode, JumplistNodes } from './context';
import { jumplistReducer } from './reducer';

export type ChildFunction = (context: IJumplistContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type JumplistProviderProps = {
  classPrefix?: string
  nodes?: JumplistNodes
  rootMargin?: string
  threshold?: number
  children: React.ReactNode | ChildFunction
  smoothScroll?: boolean
}

export const JumplistProvider: React.FC<JumplistProviderProps> = (props) => {
  const {
    children,
    classPrefix,
    rootMargin,
    threshold,
    smoothScroll
  } = props;

  const [nodes, dispatchNodes] = useReducer(jumplistReducer, []);
  const [scrollTarget, setScrollTarget] = useState<string | undefined>(); // when defined, the matching jumplist node will scroll itself into view

  const currentJumplistIndex = nodes.findIndex((node: JumplistNode) => node.isIntersecting); // could be -1 if no nodes are intersecting
  const activeJumplistIndex = typeof currentJumplistIndex === 'number' && currentJumplistIndex > -1
    ? currentJumplistIndex
    : undefined;

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

  const clearJumplist = useCallback(() => {
    dispatchNodes({
      type: 'clear'
    })
  }, [])

  const clearScrollTarget = useCallback(() => {
    setScrollTarget(undefined);
  }, [])

  useEffect(() => {
    if (smoothScroll) {
      document.documentElement.style.scrollBehavior = 'smooth';
    } else {
      document.documentElement.style.removeProperty('scroll-behavior');
    }
    return () => {
      document.documentElement.style.removeProperty('scroll-behavior');
    }
  }, [smoothScroll])

  const scrollToID = useCallback((incomingID: string) => {
    setScrollTarget(incomingID);
  }, [])

  const context: IJumplistContext = {
    classPrefix,
    jumplist: nodes,
    syncJumplistItem,
    removeJumplistItem,
    currentJumplistIndex,
    activeJumplistIndex,
    clearJumplist,
    rootMargin,
    threshold,
    scrollTarget,
    scrollToID,
    clearScrollTarget
  }

  return (
    <JumplistContext.Provider
      value={context}
    >
      {(children && (typeof children === 'function' ? children({ ...context }) : children))}
    </JumplistContext.Provider>
  );
}
