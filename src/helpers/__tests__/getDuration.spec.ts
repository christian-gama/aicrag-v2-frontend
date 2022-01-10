import getDuration from '../getDuration'

describe('getDuration', () => {
  it('should return 3 if duration is lesser than 3', () => {
    const duration = getDuration('a')

    expect(duration).toBe(3)
  })

  it('should return 3 if duration is lesser than 3 and is passing an array', () => {
    const duration = getDuration(['a', 'b'])

    expect(duration).toBe(3)
  })

  it('should return the original duration when passing a long array', () => {
    const duration = getDuration(['12345', '12345', '12345', '12345', '12345', '12345', '12345', '12345'])

    expect(duration).toBe(4)
  })
})