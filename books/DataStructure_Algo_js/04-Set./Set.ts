type IValue = number | string 

interface IItems {
  [key: IValue]: IValue
}

export class Set {
  items: IItems

  constructor () {
    this.items = {}
  }

  add (element: IValue) {
    if(!this.items[element]) {
      this.items[element] = element
    }

    return
  }

  delete (element: IValue) {
    delete this.items[element]
  }

  has (element: IValue) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  clear () {
    this.items = {}
  }

  size () {
    return Object.keys(this.items).length
  }

  values () {
    return Object.values(this.items)
  }

  union (setB: Set) {
    const helperSet = new Set()
    this.values().forEach(item => helperSet.add(item))
    setB.values().forEach(item => helperSet.add(item))
    return helperSet
  }

  intersection (setB: Set) {
    const helperSet = new Set() 
    const values = this.values()
    const otherValues = setB.values()

    let biggerSet = values
    let smallerSet = otherValues

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        helperSet.add(value)
      }
    })

    return helperSet
  }

  difference (setB: Set) {
    const helperSet = new Set() 

    this.values().forEach(value => {
      if (!setB.has(value)) {
        helperSet.add(value)
      }
    })

    return helperSet
  }

  isSubsetOf (setB: Set) {
    if (this.size() > setB.size()) return false

    let isSubset = true
    
    this.values().every(item => {
      if (!setB.has(item)) {
        isSubset = false
        return false
      }

      return true
    })

    return isSubset
  }
}