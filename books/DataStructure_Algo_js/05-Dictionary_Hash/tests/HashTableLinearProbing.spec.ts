import { describe, it, expect } from 'vitest'
import { HashTableLinearProbing } from '../HashTableLinearProbing'

describe('Data Structure - HashTableLinearProbing', () => {
  it('should be able to manipulate a HashTableLinearProbing', () => {
    const hashTable = new HashTableLinearProbing()

    hashTable.put('Jamie', 'rodrigo@gmail.com')
    hashTable.put('Jhenifer', 'kelly@gmail.com')
    hashTable.put('Sue', 'Sue@gmail.com')

    expect(hashTable.get('Sue')).toBeTruthy()

    hashTable.remove('Sue')

    expect(hashTable.get('Jamie')).toBeTruthy()
    expect(hashTable.get('Jhenifer')).toBeTruthy()
    expect(hashTable.get('Sue')).toBeUndefined()
  })
})
