import { Queue } from '../02-Queue_Deque/Queue'
import { Graph } from './Graph'
import { Colors, initializeColors } from './helpers/initializeColors'

export const breadFirstSearch = (graph: Graph, startVertex: string, callback: Function) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColors(vertices)
  const queue = new Queue()
  queue.enqueue(startVertex)

  while (!queue.isEmpty()) {
    const nextVertex = queue.dequeue() as string
    const neighbors = adjList.get(nextVertex) as string[]
    color[nextVertex] = Colors.GREY

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]

      if (color[neighbor] === Colors.WHITE) {
        color[neighbor] = Colors.GREY
        queue.enqueue(neighbor)
      }
    }

    color[nextVertex] = Colors.BLACK
    callback && callback(nextVertex)
  }
}
