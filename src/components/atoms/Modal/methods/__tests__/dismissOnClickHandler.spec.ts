import dismissOnClickHandler from '../dismissOnClickHandler'

describe('dismissOnClickHandler', () => {
  it('should call onDismiss function if event target is equal to event current target', () => {
    const event = { target: 'any_target', currentTarget: 'any_target' } as any

    const params = {
      event,
      setIsOpenState: jest.fn(),
      onDismiss: jest.fn()
    }

    dismissOnClickHandler(params)

    expect(params.onDismiss).toHaveBeenCalled()
  })

  it('should call setIsOpenState with false value if event target is equal to event current target', () => {
    const event = { target: 'any_target', currentTarget: 'any_target' } as any

    const params: any = {
      event,
      onDismiss: jest.fn(),
      setIsOpenState: jest.fn()
    }

    dismissOnClickHandler(params)

    expect(params.setIsOpenState).toHaveBeenCalledWith(false)
  })

  it('should not call setIsOpenState if event target is different of event current target', () => {
    const event = { target: 'any_target', currentTarget: 'diffeernt_target' } as any

    const params: any = {
      event,
      onDismiss: jest.fn(),
      setIsOpenState: jest.fn()
    }

    dismissOnClickHandler(params)

    expect(params.setIsOpenState).not.toHaveBeenCalled()
  })
})
