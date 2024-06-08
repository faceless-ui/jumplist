import { createContext, useContext } from 'react';

export type JumplistNode = {
  nodeID: string
  isIntersecting?: boolean
}

export type JumplistNodes = JumplistNode[];

export interface IJumplistContext {
  jumplist: JumplistNodes
  classPrefix?: string
  syncJumplistItem: (node: JumplistNode) => void // eslint-disable-line no-unused-vars
  removeJumplistItem: (id: string) => void // eslint-disable-line no-unused-vars
  activeJumplistIndex?: number
  currentJumplistIndex?: number
  clearJumplist: () => void // eslint-disable-line no-unused-vars
  rootMargin?: string
  threshold?: number
  scrollTarget?: string
  scrollToID: (id: string) => void // eslint-disable-line no-unused-vars
  clearScrollTarget: () => void // eslint-disable-line no-unused-vars
}

export const useJumplist = (): IJumplistContext => useContext(JumplistContext);

export const JumplistContext = createContext<IJumplistContext>({} as IJumplistContext);
