import { capitalize } from '../capitalize'

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    const value = 'test'
    const result = capitalize(value)

    expect(result).toBe('Test')
  })

  it('should lowercase the rest of the letters', () => {
    const value = 'TEST'
    const result = capitalize(value)

    expect(result).toBe('Test')
  })
})
