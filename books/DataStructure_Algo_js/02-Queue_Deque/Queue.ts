interface IQueue {
  [key: number]: unknown
}

export class Queue {
  queue: IQueue
  count: number
  lowestCount: number

  constructor () {
    this.queue = {}
    this.count = 0
    this.lowestCount = 0
  }

  enqueue (value: unknown) {
    this.queue[this.count] = value
    this.count++
  }

  dequeue () {
    const value = this.queue[this.lowestCount]
    delete this.queue[this.lowestCount]
    this.lowestCount++
    return value
  }

  peek () {
    return this.queue[this.lowestCount]
  }

  getSize () {
    return this.count - this.lowestCount
  }

  isEmpty () {
    return this.getSize() === 0
  }

  getValues () {
    let helper = this.queue[this.lowestCount]

    for (let i = this.lowestCount; i < this.count; i++) {
      helper += `, ${this.queue[i]}`
    }

    return helper
  }
}
