import dismissOnEscapeHandler from '../dismissOnEscapeHandler'

describe('dismissOnEscapeHandler', () => {
  it('should call onDismiss function if event key is equal to "Escape"', () => {
    const props = {
      onDismiss: jest.fn()
    }
    const states: any = {
      event: {
        key: 'Escape'
      },
      setIsOpenState: jest.fn()
    }

    dismissOnEscapeHandler(props, states)

    expect(props.onDismiss).toHaveBeenCalled()
  })

  it('should call setIsOpenState with false value if event key is equal to "Escape"', () => {
    const props = {
      onDismiss: undefined
    }
    const states: any = {
      event: {
        key: 'Escape'
      },
      setIsOpenState: jest.fn()
    }

    dismissOnEscapeHandler(props, states)

    expect(states.setIsOpenState).toHaveBeenCalledWith(false)
  })

  it('should not call setIsOpenState if event key is different of "Escape"', () => {
    const props = {
      onDismiss: undefined
    }
    const states: any = {
      event: {
        key: 'Enter'
      },
      setIsOpenState: jest.fn()
    }

    dismissOnEscapeHandler(props, states)

    expect(states.setIsOpenState).not.toHaveBeenCalled()
  })
})
