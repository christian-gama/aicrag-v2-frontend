import { DateTime } from 'luxon'
import pickDateHandler from '../pickDateHandler'

describe('pickDateHandler', () => {
  it('should call setSelectedDate with correct picked date', () => {
    const dateNow = new Date().getTime()

    const day = 1
    const dispatch = jest.fn()
    const setSelectedDate = jest.fn() as any
    const pickedDate = DateTime.fromMillis(dateNow).set({ day }).toMillis()
    const calendarDate = dateNow

    pickDateHandler({
      calendarDate,
      dispatch,
      day,
      setSelectedDate
    })

    expect(setSelectedDate).toHaveBeenCalledWith(pickedDate)
  })
})
