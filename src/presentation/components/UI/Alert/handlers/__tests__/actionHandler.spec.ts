import handleAction from '../actionHandler'

describe('actionHandler', () => {
  it('should call setIsOpenState if props.mode is equal to "actionAndCancel" and has props.onAction function', () => {
    const props = {
      onAction: () => {},
      mode: 'actionAndCancel' as 'actionAndCancel'
    }
    const states = {
      setIsOpenState: jest.fn()
    }

    handleAction(props, states)

    expect(states.setIsOpenState).toHaveBeenCalledWith(false)
  })

  it('should not call setIsOpen if props.mode is different of "actionAndCancel"', () => {
    const props = {
      mode: 'cancelOnly' as 'cancelOnly'
    }
    const states = {
      setIsOpenState: jest.fn()
    }

    handleAction(props, states)

    expect(states.setIsOpenState).not.toHaveBeenCalled()
  })
})
