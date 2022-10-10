import { describe, it, expect } from 'vitest'
import { HashTable } from '../HashTable'

describe('Data Structure - HashTable', () => {
  it('should be able to manipulate a HashTable', () => {
    const hashTable = new HashTable()

    hashTable.put('Rodrigo', 'rodrigo@gmail.com')
    hashTable.put('Jhenifer', 'kelly@gmail.com')
    hashTable.put('Gaby', 'gaby@gmail.com')

    expect(hashTable.get('Gaby')).toBeTruthy()

    hashTable.remove('Jhenifer')

    expect(hashTable.get('Jhenifer')).toBeUndefined()
  })
})
