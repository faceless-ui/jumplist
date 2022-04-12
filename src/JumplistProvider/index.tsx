import React, { useCallback, useEffect, useReducer } from 'react';
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

  const addJumplistItem = useCallback((incomingNode: JumplistNode) => {
    dispatchNodes({
      type: 'add',
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

  const resetJumplist = useCallback((incomingJumplist: JumplistNodes) => {
    dispatchNodes({
      type: 'reset',
      // @ts-ignore TODO: type this better
      payload: incomingJumplist
    })
  }, [])

  useEffect(() => {
    if (nodesFromProps) {
      resetJumplist(nodesFromProps)
    }
  }, [nodesFromProps])

  const context: IJumplistContext = {
    classPrefix,
    jumplist: nodes,
    addJumplistItem,
    removeJumplistItem,
    resetJumplist
  }

  return (
    <JumplistContext.Provider
      value={context}
    >
      {(children && (typeof children === 'function' ? children({ ...context }) : children))}
    </JumplistContext.Provider>
  );
}
