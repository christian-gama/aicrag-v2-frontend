import getFormattedTime from './getFormattedTime'

const timerIncreaser = (config: {
  type: 'hour' | 'minute'
  prevTime: string
  increase: boolean
}): string => {
  const { type, prevTime, increase } = config

  if (increase) {
    const nextTime = parseInt(prevTime) + 1

    if (type === 'hour') {
      if (nextTime >= 24) {
        return '00'
      }
    }

    if (type === 'minute') {
      if (nextTime >= 60) {
        return '00'
      }
    }

    return getFormattedTime(nextTime)
  }

  const nextTime = parseInt(prevTime) - 1

  if (type === 'hour') {
    if (nextTime < 0) {
      return '23'
    }
  }

  if (type === 'minute') {
    if (nextTime < 0) {
      return '59'
    }
  }

  return getFormattedTime(nextTime)
}

export default timerIncreaser
