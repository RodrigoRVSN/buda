import { describe, it, expect } from 'vitest'
import { HashTableSeparateChaining } from '../HashTableSeparateChaining'

describe('Data Structure - HashTableSeparateChaining', () => {
  it('should be able to manipulate a HashTableSeparateChaining', () => {
    const hashTable = new HashTableSeparateChaining()

    hashTable.put('Jamie', 'rodrigo@gmail.com')
    hashTable.put('Jhenifer', 'kelly@gmail.com')
    hashTable.put('Sue', 'Sue@gmail.com')

    expect(hashTable.get('Sue')).toBeTruthy()

    hashTable.remove('Sue')

    expect(hashTable.get('Sue')).toBeUndefined()
  })
})
