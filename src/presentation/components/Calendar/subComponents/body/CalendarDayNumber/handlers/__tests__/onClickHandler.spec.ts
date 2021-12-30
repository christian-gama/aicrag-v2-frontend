import onClickHandler from '../onClickHandler'

describe('onClickHandler', () => {
  it('should call onClick if onClick function is defined and it is not dimmed', () => {
    const onClick = jest.fn()
    const dayNumber = 1
    const props = {
      onClick,
      dimmed: false
    } as any

    onClickHandler(props, { dayNumber })

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should not call onClick if is dimmed', () => {
    const onClick = jest.fn()
    const dayNumber = 1
    const props = {
      onClick,
      dimmed: true
    } as any

    onClickHandler(props, { dayNumber })

    expect(onClick).not.toHaveBeenCalled()
  })
})
