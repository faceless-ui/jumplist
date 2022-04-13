export type JumplistNode = {
  id: string
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
}
