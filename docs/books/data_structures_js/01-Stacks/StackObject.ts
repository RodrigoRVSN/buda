interface IStack {
  [index: number]: unknown
}

export class Stack {
  stack: IStack
  count: number

  constructor () {
    this.stack = {}
    this.count = 0
  }

  push (value: unknown) {
    this.stack[this.count] = value
    this.count++
  }

  pop () {
    if (this.isEmpty()) return '400'

    const helper = this.stack[this.count]
    delete this.stack[this.count]
    this.count--
    return helper
  }

  peek () {
    if (this.isEmpty()) return '404'

    return this.stack[this.count - 1]
  }

  clear () {
    this.stack = {}
    this.count = 0
  }

  isEmpty () {
    return this.count === 0
  }

  getSize () {
    return this.count
  }
}
