import handleAction from '../actionHandler'

describe('actionHandler', () => {
  it('should call setIsOpenState if props.mode is equal to "actionAndCancel" and has props.onAction function', () => {
    const params = {
      setIsOpenState: jest.fn(),
      onAction: () => {},
      mode: 'actionAndCancel' as 'actionAndCancel'
    }

    handleAction(params)

    expect(params.setIsOpenState).toHaveBeenCalledWith(false)
  })

  it('should not call setIsOpen if props.mode is different of "actionAndCancel"', () => {
    const params = {
      setIsOpenState: jest.fn(),
      mode: 'cancelOnly' as 'cancelOnly',
      onAction: jest.fn()
    }

    handleAction(params)

    expect(params.setIsOpenState).not.toHaveBeenCalled()
  })
})
