export class ValuePair {
  key: string
  value: unknown

  constructor (key: string, value: unknown) {
    this.key = key
    this.value = value
  }

  toString () {
    return `[#${this.key}: ${this.value}]`
  }
}
