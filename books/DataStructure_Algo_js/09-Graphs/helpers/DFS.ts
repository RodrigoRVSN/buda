import { Dictionary } from '../../05-Dictionary_Hash/Dictionary'
import { Graph } from '../Graph'
import { Colors, IColor, initializeColors } from './initializeColors'

type IFinished = { [key: string]: number }
type IDiscovery = { [key: string]: number }
type IPredecessor = { [key: string]: string | null }

export const DFS = (graph: Graph) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColors(vertices)
  const discovery: IDiscovery = {}
  const finished: IFinished = {}
  const predecessors: IPredecessor = {}
  const time = { count: 0 }

  for (let i = 0; i < vertices.length; i++) {
    discovery[vertices[i]] = 0
    finished[vertices[i]] = 0
    predecessors[vertices[i]] = null
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, discovery, finished, predecessors, time, adjList)
    }
  }

  return { discovery, finished, predecessors }
}

const DFSVisit = (vertex: string, color: IColor, discovery: IDiscovery, finished: IFinished, predecessors: IPredecessor, time: {count: number}, adjList: Dictionary) => {
  color[vertex] = Colors.GREY
  discovery[vertex] = ++time.count
  const neighbors = adjList.get(vertex) as string[]

  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i]
    if (color[neighbor] === Colors.WHITE) {
      predecessors[neighbor] = vertex
      DFSVisit(neighbor, color, discovery, finished, predecessors, time, adjList)
    }
  }

  color[vertex] = Colors.BLACK
  finished[vertex] = ++time.count
}
