const INF = Number.MAX_SAFE_INTEGER

export const dijkstra = (graph: number[][], src: number) => {
  const distance = []
  const visited = []

  const { length } = graph

  for (let i = 0; i < length; i++) {
    distance[i] = INF
    visited[i] = false
  }

  distance[src] = 0

  for (let i = 0; i < length; i++) {
    const minIndex = minDistance(distance, visited)
    visited[minIndex] = true
    for (let v = 0; v < length; v++) {
      if (!visited[v] && graph[minIndex][v] !== 0 && distance[minIndex] !== INF && distance[minIndex] + graph[minIndex][v] < distance[v]) {
        distance[v] = distance[minIndex] + graph[minIndex][v]
      }
    }
  }

  return distance
}

const minDistance = (distance: number[], visited: boolean[]) => {
  let min = INF
  let minIndex = -1

  for (let i = 0; i < distance.length; i++) {
    if (!visited[i] && distance[i] <= min) {
      min = distance[i]
      minIndex = i
    }
  }

  return minIndex
}
