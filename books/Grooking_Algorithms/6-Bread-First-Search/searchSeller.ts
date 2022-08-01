interface IGraph {
  [key: string] : string[]
}

const graph: IGraph = {}
graph.you = ['jenifer']
graph.jenifer = ['lucas', 'rodrigo', 'lucas']
graph.lucas = []
graph.rodrigo = ['ruam', 'ruam']
graph.ruam = []

const isSeller = (name: string) => {
  return name.endsWith('m')
}

export const searchSeller = (name: string) => {
  const queueSearch: string[] = graph[name]
  const alreadySearched: string[] = []

  while (queueSearch.length > 0) {
    const person = queueSearch.shift() as string

    if (isSeller(person) && !alreadySearched.includes(person)) {
      console.log(`${person} is a seller!`)
      return true
    }

    alreadySearched.push(person)
    queueSearch.push(...graph[person])
  }

  return false
}
