export type JumplistNode = {
  id?: string
}

export interface IJumplistContext {
  nodes: JumplistNode[]
  classPrefix?: string
}
