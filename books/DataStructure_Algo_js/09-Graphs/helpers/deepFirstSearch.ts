import { Dictionary } from '../../05-Dictionary_Hash/Dictionary'
import { Graph } from '../Graph'
import { Colors, IColor, initializeColors } from './initializeColors'

export const deepFirstSearch = (graph: Graph, callback: Function) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColors(vertices)

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}

const depthFirstSearchVisit = (vertex: string, color: IColor, adjList: Dictionary, callback: Function) => {
  color[vertex] = Colors.GREY
  callback && callback(vertex)

  const neighbors = adjList.get(vertex) as string[]

  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i]
    if (color[neighbor] === Colors.WHITE) {
      depthFirstSearchVisit(neighbor, color, adjList, callback)
    }
  }
  color[vertex] = Colors.BLACK
}
