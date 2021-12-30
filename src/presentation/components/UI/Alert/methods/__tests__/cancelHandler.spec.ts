import cancelHandler from '../cancelHandler'

describe('cancelHandler', () => {
  it('should call function onCancel if it exists on props', () => {
    const params = {
      setIsOpenState: () => {},
      onCancel: jest.fn()
    }

    cancelHandler(params)

    expect(params.onCancel).toHaveBeenCalled()
  })

  it('should execute only setIsOpenState if the function onCancel is undefined', () => {
    const params = {
      setIsOpenState: jest.fn(),
      onCancel: undefined
    }

    cancelHandler(params)

    expect(params.setIsOpenState).toHaveBeenCalled()
  })
})
