import timerIncreaser from '../timerIncreaser'

describe('timerIncreaser', () => {
  describe('hour', () => {
    it('should return next hour', () => {
      expect(timerIncreaser({ type: 'hour', prevTime: '10', increase: true })).toBe('11')
    })

    it('should return previous hour', () => {
      expect(timerIncreaser({ type: 'hour', prevTime: '10', increase: false })).toBe('09')
    })

    it('should return next hour when previous hour is 23', () => {
      expect(timerIncreaser({ type: 'hour', prevTime: '23', increase: true })).toBe('00')
    })

    it('should return previous hour when previous hour is 00', () => {
      expect(timerIncreaser({ type: 'hour', prevTime: '00', increase: false })).toBe('23')
    })
  })

  describe('minute', () => {
    it('should return next minute', () => {
      expect(timerIncreaser({ type: 'minute', prevTime: '10', increase: true })).toBe('11')
    })

    it('should return previous minute', () => {
      expect(timerIncreaser({ type: 'minute', prevTime: '10', increase: false })).toBe('09')
    })

    it('should return next minute when previous minute is 59', () => {
      expect(timerIncreaser({ type: 'minute', prevTime: '59', increase: true })).toBe('00')
    })

    it('should return previous minute when previous minute is 00', () => {
      expect(timerIncreaser({ type: 'minute', prevTime: '00', increase: false })).toBe('59')
    })
  })
})
