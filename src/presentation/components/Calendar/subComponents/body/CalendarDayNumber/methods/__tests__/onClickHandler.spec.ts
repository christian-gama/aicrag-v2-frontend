import onClickHandler from '../onClickHandler'

describe('onClickHandler', () => {
  it('should call onClick if onClick function is defined and it is not dimmed', () => {
    const onClick = jest.fn()
    const dayNumber = 1
    const params = {
      onClick,
      dimmed: false
    } as any

    onClickHandler({ dayNumber, ...params })

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should not call onClick if is dimmed', () => {
    const onClick = jest.fn()
    const dayNumber = 1
    const params = {
      onClick,
      dimmed: true
    } as any

    onClickHandler({ dayNumber, ...params })

    expect(onClick).not.toHaveBeenCalled()
  })
})
