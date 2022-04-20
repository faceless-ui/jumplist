import { createContext, useContext } from 'react';

export type JumplistNode = {
  nodeID: string
  label?: string
  isIntersecting?: boolean
}

export type JumplistNodes = JumplistNode[];

export interface IJumplistContext {
  jumplist: JumplistNodes
  classPrefix?: string
  setJumplist: (nodes: JumplistNodes) => void // eslint-disable-line no-unused-vars
  syncJumplistItem: (node: JumplistNode) => void // eslint-disable-line no-unused-vars
  removeJumplistItem: (id: string) => void // eslint-disable-line no-unused-vars
  activeJumplistIndex?: number
  setActiveJumplistIndex: (index: number) => void // eslint-disable-line no-unused-vars
  currentJumplistIndex?: number
  clearJumplist: () => void // eslint-disable-line no-unused-vars
  rootMargin?: string
  threshold?: number
}

export const JumplistContext = createContext<IJumplistContext>({} as IJumplistContext);

export const useJumplist = (): IJumplistContext => useContext(JumplistContext);
