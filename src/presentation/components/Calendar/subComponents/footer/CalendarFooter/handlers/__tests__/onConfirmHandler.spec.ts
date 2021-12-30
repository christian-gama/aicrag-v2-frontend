import onConfirmHandler from '../onConfirmHandler'

describe('onConfirmHandler', () => {
  it('should call saveCalendar and closeCalendar', () => {
    const saveCalendar = jest.fn() as any
    const closeCalendar = jest.fn() as any
    const dispatch = jest.fn() as any
    const selectedDate = new Date().getTime()

    const params = {
      dispatch,
      saveCalendar,
      closeCalendar,
      selectedDate
    }

    onConfirmHandler(params)

    expect(dispatch).toHaveBeenCalledWith(saveCalendar())
    expect(dispatch).toHaveBeenCalledWith(closeCalendar())
  })
})
