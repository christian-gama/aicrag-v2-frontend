import { createFilledArray } from '..'

describe('createFilledArray', () => {
  it('returns an array with the correct elements and length', () => {
    const length = 5
    const value = 'test'
    const result = createFilledArray(length, value)

    expect(result).toStrictEqual(['test', 'test', 'test', 'test', 'test'])
  })
})
