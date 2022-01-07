import onCancelHandler from '../onCancelHandler'

describe('onCancelHandler', () => {
  it('should call resetCalendar and closeCalendar function', () => {
    const resetCalendar = jest.fn() as any
    const closeCalendar = jest.fn() as any
    const dispatch = jest.fn() as any
    const previousDate = Date.now()

    const params = {
      dispatch,
      resetCalendar,
      closeCalendar,
      previousDate
    }

    onCancelHandler(params)

    expect(dispatch).toHaveBeenCalledWith(resetCalendar())
    expect(dispatch).toHaveBeenCalledWith(closeCalendar())
  })
})
