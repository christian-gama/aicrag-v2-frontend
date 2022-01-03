const getDuration = (message: string | string[]) => {
  const multiplier = 0.1

  if (Array.isArray(message)) {
    let duration = 0

    message.forEach((item) => {
      duration += item.length * multiplier
    })

    return duration < 3 ? 3 : duration
  }

  const duration = message.length * multiplier

  return duration < 3 ? 3 : duration
}

export default getDuration
