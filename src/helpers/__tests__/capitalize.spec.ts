import capitalize from '../capitalize'

describe('capitalize', () => {
  it('returns the first letter capitalized', () => {
    const value = 'test'

    const result = capitalize(value)

    expect(result).toBe('Test')
  })

  it('returns the rest of the letters as lowercase', () => {
    const value = 'TEST'

    const result = capitalize(value)

    expect(result).toBe('Test')
  })
})
