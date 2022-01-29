export const getDuration = (
  message: string | string[],
  minDuration: number
) => {
  const multiplier = 0.1

  if (Array.isArray(message)) {
    let duration = 0

    message.forEach((item) => {
      duration += item.length * multiplier
    })

    return duration < minDuration ? minDuration : duration
  }

  const duration = message.length * multiplier

  return duration < minDuration ? minDuration : duration
}
