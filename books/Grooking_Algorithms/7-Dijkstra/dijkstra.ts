const graph = {} as any
graph.start = {}
graph.start.a = 6
graph.start.b = 2

graph.a = {}
graph.a.fin = 1

graph.b = {}
graph.b.a = 3
graph.b.fin = 5

graph.fin = {}

const costs = {} as any
costs.a = 6
costs.b = 2
costs.fin = Infinity

const parents = {} as any
parents.a = 'start'
parents.b = 'start'
parents.fin = null

const processed = [] as string[]

const findLowestCostNode = (theCosts: any) => {
  let lowestCost = Infinity
  let lowestCostNode = null

  Object.keys(theCosts).forEach((node) => {
    const cost = theCosts[node]

    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost
      lowestCostNode = node
    }
  })

  return lowestCostNode
}

export const dijkstraAlgorithm = () => {
  let node = findLowestCostNode(costs)

  while (node) {
    const cost = costs[node]
    const neighbors = graph[node]

    Object.keys(neighbors).forEach(neighbor => {
      const newCost = neighbors[neighbor] + cost

      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost
        parents[neighbor] = node
      }
    })

    processed.push(node)

    node = findLowestCostNode(costs)
  }

  return costs
}
