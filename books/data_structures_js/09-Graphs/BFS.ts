import { Queue } from '../02-Queue_Deque/Queue'
import { Graph } from './Graph'
import { Colors, initializeColors } from './helpers/initializeColors'

type IDistance = { [key: string]: number }
type IPredecessor = { [key: string]: string | null }

export const breadFirstSearch = (graph: Graph, startVertex: string, callback: Function) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColors(vertices)
  const queue = new Queue()
  const distances: IDistance = {}
  const predecessores: IPredecessor = {}

  queue.enqueue(startVertex)

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0
    predecessores[vertices[i]] = null
  }

  while (!queue.isEmpty()) {
    const nextVertex = queue.dequeue() as string
    const neighbors = adjList.get(nextVertex) as string[]
    color[nextVertex] = Colors.GREY

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]

      if (color[neighbor] === Colors.WHITE) {
        color[neighbor] = Colors.GREY
        distances[neighbor] = distances[nextVertex] + 1
        predecessores[neighbor] = nextVertex
        queue.enqueue(neighbor)
      }
    }

    color[nextVertex] = Colors.BLACK
    callback && callback(nextVertex)
  }

  return { distances, predecessores }
}
