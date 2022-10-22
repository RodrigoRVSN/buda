import { describe, it, expect } from 'vitest'
import { breadFirstSearch } from '../BFS'
import { deepFirstSearch } from '../deepFirstSearch'
import { dijkstra } from '../dijkstra'
import { Graph } from '../Graph'

describe('Data Structure - Graph', () => {
  it('should be able to manipulate a Graph', () => {
    const graph = new Graph()
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

    for (let i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i])
    }

    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('E', 'I')

    const breadValues: string[] = []
    const pushBread = (value: string) => breadValues.push(value)

    breadFirstSearch(graph, vertices[0], pushBread)

    expect(breadValues).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'])

    const deepValues: string[] = []
    const pushDeep = (value: string) => deepValues.push(value)

    deepFirstSearch(graph, pushDeep)

    expect(deepValues).toStrictEqual(['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H'])
  })

  it('should be able to see the shortest paths to each vertex using dijsktra algorithm', () => {
    const graph = [
      [0, 2, 4, 0, 0, 0],
      [0, 0, 2, 4, 2, 0],
      [0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 3, 0, 2],
      [0, 0, 0, 0, 0, 0]
    ]

    expect(dijkstra(graph, 0)).toStrictEqual([0, 2, 4, 6, 4, 6])
  })
})
