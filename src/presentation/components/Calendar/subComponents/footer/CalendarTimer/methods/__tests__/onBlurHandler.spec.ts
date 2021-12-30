import onBlurHandler from '../onBlurHandler'

describe('onBlurHandler', () => {
  it('should call setHours if event target name is equal to calendar-hour', () => {
    const setHours = jest.fn()
    const event = { target: { name: 'calendar-hour', value: '12' } }
    const params = { setHours, event } as any

    onBlurHandler(params)

    expect(setHours).toHaveBeenCalledWith('12')
  })

  it('should call setMinutes if event target name is equal to calendar-minute', () => {
    const setMinutes = jest.fn()
    const event = { target: { name: 'calendar-minute', value: '12' } }
    const params = { setMinutes, event } as any

    onBlurHandler(params)

    expect(setMinutes).toHaveBeenCalledWith('12')
  })
})
