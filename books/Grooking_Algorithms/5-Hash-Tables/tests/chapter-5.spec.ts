import { describe, it, expect } from 'vitest'
import { charAsKey } from '../charAsKey'
import { makeVote } from '../votes'

describe('Chapter 5 - Hash Table - Votes', () => {
  it('should mark as voted and return "Get out!" if has already voted', () => {
    expect(makeVote('Rodrigo')).toStrictEqual({ Rodrigo: true })

    expect(makeVote('Rodrigo')).toBe('Get out Rodrigo!')

    expect(makeVote('Junior')).toStrictEqual({ Rodrigo: true, Junior: true })

    expect(makeVote('Junior')).toBe('Get out Junior!')
  })
})

describe('Chapter 5 - Hash Table - First Char as Key', () => {
  it('should be able to store a string with the first char as key', () => {
    expect(charAsKey('Rodrigo')).toStrictEqual({ r: ['Rodrigo'] })

    expect(charAsKey('Junior')).toStrictEqual({ r: ['Rodrigo'], j: ['Junior'] })

    expect(charAsKey('Rodolfo')).toStrictEqual({ r: ['Rodrigo', 'Rodolfo'], j: ['Junior'] })

    expect(charAsKey('Ricardao')).toStrictEqual({ r: ['Rodrigo', 'Rodolfo', 'Ricardao'], j: ['Junior'] })
  })
})
