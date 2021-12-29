import handleCancel from '../handleCancel'

describe('handleCancel', () => {
  it('should call function onCancel if it exists on props', () => {
    const props = {
      onCancel: jest.fn()
    }
    const states = {
      setIsOpenState: () => {}
    }

    handleCancel(props, states)

    expect(props.onCancel).toHaveBeenCalled()
  })

  it('should execute only setIsOpenState if the function onCancel is undefined', () => {
    const props = {
      onCancel: undefined
    }
    const states = {
      setIsOpenState: jest.fn()
    }

    handleCancel(props, states)

    expect(states.setIsOpenState).toHaveBeenCalled()
  })
})
