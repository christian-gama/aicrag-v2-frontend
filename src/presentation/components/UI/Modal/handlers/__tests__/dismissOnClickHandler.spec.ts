import dismissOnClickHandler from '../dismissOnClickHandler'

describe('dismissOnClickHandler', () => {
  it('should call onDismiss function if event target is equal to event current target', () => {
    const props = {
      onDismiss: jest.fn()
    }
    const states: any = {
      event: {
        target: 'any_target',
        currentTarget: 'any_target'
      },
      setIsOpenState: jest.fn()
    }

    dismissOnClickHandler(props, states)

    expect(props.onDismiss).toHaveBeenCalled()
  })

  it('should call setIsOpenState with false value if event target is equal to event current target', () => {
    const props = {
      onDismiss: undefined
    }
    const states: any = {
      event: {
        target: 'any_target',
        currentTarget: 'any_target'
      },
      setIsOpenState: jest.fn()
    }

    dismissOnClickHandler(props, states)

    expect(states.setIsOpenState).toHaveBeenCalledWith(false)
  })

  it('should not call setIsOpenState if event target is different of event current target', () => {
    const props = {
      onDismiss: undefined
    }
    const states: any = {
      event: {
        target: 'any_target',
        currentTarget: 'diffeernt_target'
      },
      setIsOpenState: jest.fn()
    }

    dismissOnClickHandler(props, states)

    expect(states.setIsOpenState).not.toHaveBeenCalled()
  })
})
