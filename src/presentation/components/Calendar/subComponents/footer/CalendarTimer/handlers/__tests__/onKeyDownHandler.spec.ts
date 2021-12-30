import onKeyDownHandler from '../onKeyDownHandler'

describe('onKeyDownHandler', () => {
  describe('arrowUp', () => {
    it('should call setHours if event current target name is equal to calendar-hour', () => {
      const setHours = jest.fn()
      const setMinutes = jest.fn()
      const states = {
        setHours,
        setMinutes,
        event: { currentTarget: { name: 'calendar-hour', value: '12' }, key: 'ArrowUp' }
      } as any

      onKeyDownHandler({}, states)

      expect(setHours).toHaveBeenCalledTimes(1)
    })

    it('should call setMinutes if event current target name is equal to calendar-minute', () => {
      const setHours = jest.fn()
      const setMinutes = jest.fn()
      const states = {
        setHours,
        setMinutes,
        event: { currentTarget: { name: 'calendar-minute', value: '12' }, key: 'ArrowUp' }
      } as any

      onKeyDownHandler({}, states)

      expect(setMinutes).toHaveBeenCalledTimes(1)
    })
  })

  describe('arrowDown', () => {
    it('should call setHours if event current target name is equal to calendar-hour', () => {
      const setHours = jest.fn()
      const setMinutes = jest.fn()
      const states = {
        setHours,
        setMinutes,
        event: { currentTarget: { name: 'calendar-hour', value: '12' }, key: 'ArrowDown' }
      } as any

      onKeyDownHandler({}, states)

      expect(setHours).toHaveBeenCalledTimes(1)
    })

    it('should call setMinutes if event current target name is equal to calendar-minute', () => {
      const setHours = jest.fn()
      const setMinutes = jest.fn()
      const states = {
        setHours,
        setMinutes,
        event: { currentTarget: { name: 'calendar-minute', value: '12' }, key: 'ArrowDown' }
      } as any

      onKeyDownHandler({}, states)

      expect(setMinutes).toHaveBeenCalledTimes(1)
    })
  })

  describe('other key', () => {
    it('should not call setHours or setMinutes', () => {
      const setHours = jest.fn()
      const setMinutes = jest.fn()
      const states = {
        setHours,
        setMinutes,
        event: { currentTarget: { name: 'calendar-hour', value: '12' }, key: 'Enter' }
      } as any

      onKeyDownHandler({}, states)

      expect(setHours).not.toHaveBeenCalled()
      expect(setMinutes).not.toHaveBeenCalled()
    })
  })
})
