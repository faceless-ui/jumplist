export type JumplistNode = {
  id: string
  label: string
}

export type JumplistNodes = JumplistNode[];

export interface IJumplistContext {
  jumplist: JumplistNodes
  classPrefix?: string
  resetJumplist: (nodes: JumplistNodes) => void // eslint-disable-line no-unused-vars
  addJumplistItem: (node: JumplistNode) => void // eslint-disable-line no-unused-vars
  removeJumplistItem: (id: string) => void // eslint-disable-line no-unused-vars
}
