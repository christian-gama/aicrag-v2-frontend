import onChangeHandler from '../onChangeHandler'

describe('onChangeHandle', () => {
  it('should call setHours if event target name is equal to calendar-hour and validation returns undefined', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce(undefined) }

    const states = { setHours, setMinutes, event: { target: { name: 'calendar-hour', value: '12' } } } as any

    onChangeHandler({ validation }, states)

    expect(setHours).toHaveBeenCalledWith('12')
  })

  it('should return undefined if event target is equal to calendar-hour and validation return an error message', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce('error') }

    const states = { setHours, setMinutes, event: { target: { name: 'calendar-hour', value: '12' } } } as any

    const result = onChangeHandler({ validation }, states)

    expect(result).toBeUndefined()
  })

  it('should call setMinutes if event target name is equal to calendar-minute and validation returns undefined', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce(undefined) }

    const states = { setHours, setMinutes, event: { target: { name: 'calendar-minute', value: '12' } } } as any

    onChangeHandler({ validation }, states)

    expect(setMinutes).toHaveBeenCalledWith('12')
  })

  it('should return undefined if event target is equal to calendar-minute and validation return an error message', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce('error') }

    const states = { setHours, setMinutes, event: { target: { name: 'calendar-minute', value: '12' } } } as any

    const result = onChangeHandler({ validation }, states)

    expect(result).toBeUndefined()
  })

  it('should not call validate if event target is different of calendar-hour and calendar-minute', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn() }

    const states = { setHours, setMinutes, event: { target: { name: 'any_value', value: '12' } } } as any

    onChangeHandler({ validation }, states)

    expect(validation.validate).not.toHaveBeenCalled()
  })
})
