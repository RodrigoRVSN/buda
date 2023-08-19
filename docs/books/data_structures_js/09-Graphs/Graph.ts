import { Dictionary } from '../05-Dictionary_Hash/Dictionary'

export class Graph {
  isDirected: boolean
  vertices: string[]
  adjList: Dictionary

  constructor (isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
    this.adjList = new Dictionary()
  }

  addVertex (vertex: string) {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex)
      this.adjList.set(vertex, [])
    }
  }

  addEdge (vertex: string, secondVertex: string) {
    if (!this.adjList.get(vertex)) {
      this.addVertex(vertex)
    }
    if (!this.adjList.get(secondVertex)) {
      this.addVertex(secondVertex)
    }

    (this.adjList.get(vertex) as string[]).push(secondVertex)
    if (!this.isDirected) {
      (this.adjList.get(secondVertex) as string[]).push(vertex)
    }
  }

  getVertices () {
    return this.vertices
  }

  getAdjList () {
    return this.adjList
  }

  toString () {
    let string = ''
    for (let i = 0; i < this.vertices.length; i++) {
      string += `[${this.vertices[i]}] -> `

      const neighbors = this.adjList.get(this.vertices[i]) as string[]
      for (let j = 0; j < neighbors.length; j++) {
        string += `${neighbors[j]}`
      }

      string += '\n'
    }

    return string
  }
}
