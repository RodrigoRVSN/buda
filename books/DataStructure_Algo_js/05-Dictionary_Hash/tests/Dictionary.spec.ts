import { describe, it, expect } from 'vitest'
import { Dictionary } from '../Dictionary'

describe('Data Structure - Dictionary', () => {
  it('should be able to manipulate a Dictionary', () => {
    const dictionary = new Dictionary()

    dictionary.set('Rodrigo', 'rodrigo@gmail.com')
    dictionary.set('Jhenifer', 'kelly@gmail.com')
    dictionary.set('Gaby', 'gaby@gmail.com')

    expect(dictionary.get('Gaby')).toBeTruthy()
    expect(dictionary.size()).toBe(3)

    dictionary.remove('Jhenifer')

    expect(dictionary.size()).toBe(2)
    expect(dictionary.get('Jhenifer')).toBeUndefined()

    expect(dictionary.toString()).toBe('[#Rodrigo: rodrigo@gmail.com][#Gaby: gaby@gmail.com]')
  })
})
