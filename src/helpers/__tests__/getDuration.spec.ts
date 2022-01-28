import getDuration from '../getDuration'

describe('getDuration', () => {
  it('returns 3 if duration is lesser than 3', () => {
    const duration = getDuration('a', 1)

    expect(duration).toBe(1)
  })

  it('returns 1 if duration is lesser than 1 and is passing an array', () => {
    const duration = getDuration(['a', 'b'], 1)

    expect(duration).toBe(1)
  })

  it('returns duration based on the length of array when passing a long array', () => {
    const array = [
      '12345',
      '12345',
      '12345',
      '12345',
      '12345',
      '12345',
      '12345',
      '12345'
    ]

    const duration = getDuration(array, 1)

    expect(duration).toBe(array.length / 2)
  })

  it('returns duration based on the length of string when passing a long string', () => {
    const multipler = 0.1
    const string =
      '123412341234123412341234123412345123412341234123412341234123412345'

    const duration = getDuration(string, 1)

    expect(duration).toBeCloseTo(string.length * multipler)
  })
})
