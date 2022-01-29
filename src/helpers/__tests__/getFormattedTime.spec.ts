import { getFormattedTime } from '..'

describe('getFormattedTime', () => {
  it('concats 0 if the value is lesser than 10', () => {
    expect(getFormattedTime(9)).toBe('09')
  })

  it("returns the original time if it's greater or equal to 10", () => {
    expect(getFormattedTime(10)).toBe('10')
  })
})
