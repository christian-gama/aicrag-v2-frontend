const getDuration = (message: string | string[]) => {
  const multiplier = 0.12

  if (Array.isArray(message)) {
    let duration = 0

    message.forEach((item) => {
      duration += item.length * multiplier
    })

    return duration
  }

  return message.length * multiplier
}

export default getDuration
