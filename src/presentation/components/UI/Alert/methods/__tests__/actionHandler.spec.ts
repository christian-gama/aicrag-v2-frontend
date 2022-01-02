import handleAction from '../actionHandler'

describe('actionHandler', () => {
  it('should call onAction if props.mode is equal to "actionAndCancel" and has props.onAction function', () => {
    const params = {
      onAction: jest.fn(),
      mode: 'actionAndCancel' as 'actionAndCancel'
    }

    handleAction(params)

    expect(params.onAction).toHaveBeenCalled()
  })

  it('should not call onAction if props.mode is different of "actionAndCancel"', () => {
    const params = {
      mode: 'cancelOnly' as 'cancelOnly',
      onAction: jest.fn()
    }

    handleAction(params)

    expect(params.onAction).not.toHaveBeenCalled()
  })
})
