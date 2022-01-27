import isDateExpired from '../isDateExpired'

describe('isDateExpired', () => {
  it('returns true if date is expired', () => {
    const date = new Date(Date.now() - 1000)
    expect(isDateExpired(date)).toBe(true)
  })

  it('returns false if date is not expired', () => {
    const date = new Date(Date.now() + 1000)
    expect(isDateExpired(date)).toBe(false)
  })
})
