import getFormattedTime from '../getFormattedTime'

describe('getFormattedTime', () => {
  it('should concat 0 if the value is lesser than 10', () => {
    expect(getFormattedTime(9)).toBe('09')
  })

  it('should return the value if the value is greater than 10', () => {
    expect(getFormattedTime(10)).toBe('10')
  })
})
