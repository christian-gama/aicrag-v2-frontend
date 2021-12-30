import cancelHandler from '../cancelHandler'

describe('cancelHandler', () => {
  it('should call function onCancel if it exists on props', () => {
    const props = {
      onCancel: jest.fn()
    }
    const states = {
      setIsOpenState: () => {}
    }

    cancelHandler(props, states)

    expect(props.onCancel).toHaveBeenCalled()
  })

  it('should execute only setIsOpenState if the function onCancel is undefined', () => {
    const props = {
      onCancel: undefined
    }
    const states = {
      setIsOpenState: jest.fn()
    }

    cancelHandler(props, states)

    expect(states.setIsOpenState).toHaveBeenCalled()
  })
})
