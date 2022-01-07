import onChangeHandler from '../onChangeHandler'

describe('onChangeHandle', () => {
  it('should call setHours if event target name is equal to calendar-hour and validation returns undefined', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce(undefined) }
    const event = { target: { name: 'calendar-hour', value: '12' } } as any

    const params = { setHours, setMinutes, validation, event }

    onChangeHandler(params)

    expect(setHours).toHaveBeenCalledWith('12')
  })

  it('should return undefined if event target is equal to calendar-hour and validation return an error message', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce('error') }
    const event = { target: { name: 'calendar-hour', value: '12' } }

    const params = { setHours, setMinutes, validation, event } as any

    const result = onChangeHandler(params)

    expect(result).toBeUndefined()
  })

  it('should call setMinutes if event target name is equal to calendar-minute and validation returns undefined', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce(undefined) }
    const event = { target: { name: 'calendar-minute', value: '12' } } as any

    const params = { setHours, setMinutes, validation, event }

    onChangeHandler(params)

    expect(setMinutes).toHaveBeenCalledWith('12')
  })

  it('should return undefined if event target is equal to calendar-minute and validation return an error message', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn().mockReturnValueOnce('error') }
    const event = { event: { target: { name: 'calendar-minute', value: '12' } } } as any

    const params = { setHours, setMinutes, validation, ...event }

    const result = onChangeHandler(params)

    expect(result).toBeUndefined()
  })

  it('should not call validate if event target is different of calendar-hour and calendar-minute', () => {
    const setHours = jest.fn()
    const setMinutes = jest.fn()
    const validation = { validate: jest.fn() }
    const event = { target: { name: 'other', value: '12' } } as any

    const params = { setHours, setMinutes, validation, event }

    onChangeHandler(params)

    expect(validation.validate).not.toHaveBeenCalled()
  })
})
