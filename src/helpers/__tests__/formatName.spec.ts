import { formatName } from '..'

describe('formatName', () => {
  it('returns only the first part of a long name splited by space', () => {
    const value = 'Very long name'

    const result = formatName(value)

    expect(result).toBe('Very')
  })
})
