import writeMonthYear from '../writeMonthYear'

describe('writeMonthYear', () => {
  it('returns the month and year separated by comma', () => {
    const result = writeMonthYear('January', 2022)

    expect(result).toBe('January, 2022')
  })
})
