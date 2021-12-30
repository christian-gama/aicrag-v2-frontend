import dismissOnEscapeHandler from '../dismissOnEscapeHandler'

describe('dismissOnEscapeHandler', () => {
  it('should call onDismiss function if event key is equal to "Escape"', () => {
    const event = { key: 'Escape' } as any

    const params = {
      event,
      setIsOpenState: jest.fn(),
      onDismiss: jest.fn()
    }

    dismissOnEscapeHandler(params)

    expect(params.onDismiss).toHaveBeenCalled()
  })

  it('should call setIsOpenState with false value if event key is equal to "Escape"', () => {
    const event = { key: 'Escape' } as any
    const params = { event, setIsOpenState: jest.fn(), onDismiss: jest.fn() }

    dismissOnEscapeHandler(params)

    expect(params.setIsOpenState).toHaveBeenCalledWith(false)
  })

  it('should not call setIsOpenState if event key is different of "Escape"', () => {
    const event = { key: 'Enter' } as any

    const params = {
      event,
      setIsOpenState: jest.fn(),
      onDismiss: jest.fn()
    }

    dismissOnEscapeHandler(params)

    expect(params.setIsOpenState).not.toHaveBeenCalled()
  })
})
