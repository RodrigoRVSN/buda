import { INodeElement } from '../models/Node'

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

export const compareFunction = (a: INodeElement, b: INodeElement) => {
  if (a === b) return 0

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
