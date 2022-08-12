let statesNeeded: Set<string> = new Set([
  'mt',
  'wa',
  'or',
  'id',
  'nv',
  'ut',
  'ca',
  'az'
])

type StationType = { [key: string]: Set<string> };

const stations = {} as StationType

stations.kone = new Set(['id', 'nv', 'ut'])
stations.ktwo = new Set(['wa', 'id', 'mt'])
stations.kthree = new Set(['or', 'nv', 'ca'])
stations.kfour = new Set(['nv', 'ut'])
stations.kfive = new Set(['ka', 'az'])

const finalStations = new Set()

export const getStation = () => {
  while (statesNeeded.size) {
    let bestStation = null
    let statesCovered: Set<string> = new Set()

    Object.keys(stations).forEach((station) => {
      const states = stations[station]
      const covered = new Set(
        [...statesNeeded].filter((state) => states.has(state))
      )

      if (covered.size > statesCovered.size) {
        bestStation = station
        statesCovered = covered
      }
    })

    statesNeeded = new Set(
      [...statesNeeded].filter((state) => !statesCovered.has(state))
    )
    finalStations.add(bestStation)
  }

  return finalStations
}
