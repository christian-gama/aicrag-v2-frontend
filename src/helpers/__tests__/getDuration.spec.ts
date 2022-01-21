import getDuration from '../getDuration'

describe('getDuration', () => {
  it('should return 3 if duration is lesser than 3', () => {
    const duration = getDuration('a', 1)

    expect(duration).toBe(1)
  })

  it('should return 1 if duration is lesser than 1 and is passing an array', () => {
    const duration = getDuration(['a', 'b'], 1)

    expect(duration).toBe(1)
  })

  it('should return the original duration when passing a long array', () => {
    const duration = getDuration(
      ['12345', '12345', '12345', '12345', '12345', '12345', '12345', '12345'],
      1
    )

    expect(duration).toBe(4)
  })
})
