import onBlurHandler from '../onBlurHandler'

describe('onBlurHandler', () => {
  it('should call setHours if event target name is equal to calendar-hour', () => {
    const setHours = jest.fn()
    const states = { setHours, event: { target: { name: 'calendar-hour', value: '12' } } } as any

    onBlurHandler({}, states)

    expect(setHours).toHaveBeenCalledWith('12')
  })

  it('should call setMinutes if event target name is equal to calendar-minute', () => {
    const setMinutes = jest.fn()
    const states = { setMinutes, event: { target: { name: 'calendar-minute', value: '12' } } } as any

    onBlurHandler({}, states)

    expect(setMinutes).toHaveBeenCalledWith('12')
  })
})
