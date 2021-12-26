const getFormattedTime = (time: number): string => {
  return time < 10 ? `0${time}` : `${time}`
}

export default getFormattedTime
