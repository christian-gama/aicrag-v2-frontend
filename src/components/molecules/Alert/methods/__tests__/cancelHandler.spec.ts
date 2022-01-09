import cancelHandler from '../cancelHandler'

describe('cancelHandler', () => {
  it('should call function onCancel if it exists on props', () => {
    const params = {
      onCancel: jest.fn(),
      setIsOpen: jest.fn()
    }

    cancelHandler(params)

    expect(params.onCancel).toHaveBeenCalled()
  })

  it('should execute not execute onCancel if its undefined', () => {
    const params = {
      onCancel: undefined,
      setIsOpen: jest.fn()
    }

    cancelHandler(params)

    expect(params.setIsOpen).toHaveBeenCalled()
  })
})
