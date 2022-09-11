interface IDeque {
  [key: number]: unknown
}

export class Deque {
  deque: IDeque
  count: number
  lowestCount: number

  constructor () {
    this.deque = {}
    this.count = 0
    this.lowestCount = 0
  }

  enqueueTail (value: unknown) {
    this.deque[this.count] = value
    this.count++
  }

  enqueueFront (value: unknown) {
    if (this.isEmpty()) {
      this.enqueueTail(value)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.deque[this.lowestCount] = value
    } else {
      for (let i = this.count; i > 0; i--) {
        this.deque[i] = this.deque[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.deque[0] = value
    }
  }

  dequeueFront () {
    const value = this.deque[this.lowestCount]
    delete this.deque[this.lowestCount]
    this.lowestCount++
    return value
  }

  dequeueTail () {
    const value = this.deque[this.count]
    delete this.deque[this.count]
    this.count--
    return value
  }

  peekFront () {
    return this.deque[this.lowestCount]
  }

  peekTail () {
    console.log(this.deque, this.count)
    return this.deque[this.count - 1]
  }

  getSize () {
    return this.count - this.lowestCount
  }

  isEmpty () {
    return this.getSize() === 0
  }

  getValues () {
    let helper = this.deque[this.lowestCount]

    for (let i = this.lowestCount; i < this.count; i++) {
      helper += `, ${this.deque[i]}`
    }

    return helper
  }
}
