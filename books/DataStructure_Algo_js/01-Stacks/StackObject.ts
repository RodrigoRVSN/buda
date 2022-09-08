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
    const helper = this.stack[this.count]
    delete this.stack[this.count]
    this.count--
    return helper
  }

  isEmpty () {
    return this.count === 0
  }

  peek () {
    const firstValue = this.stack[this.count]

    if (!firstValue) return '404'

    return this.stack[this.count]
  }
}
