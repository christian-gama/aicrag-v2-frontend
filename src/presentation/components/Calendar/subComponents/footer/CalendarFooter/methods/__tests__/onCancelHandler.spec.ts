import onCancelHandler from '../onCancelHandler'

describe('onCancelHandler', () => {
  it('should call resetCalendar and closeCalendar function', () => {
    const resetCalendar = jest.fn() as any
    const closeCalendar = jest.fn() as any
    const dispatch = jest.fn() as any

    const params = {
      dispatch,
      resetCalendar,
      closeCalendar
    }

    onCancelHandler(params)

    expect(dispatch).toHaveBeenCalledWith(resetCalendar())
    expect(dispatch).toHaveBeenCalledWith(closeCalendar())
  })
})
