const isDateExpired = (date: Date) => {
  return date.getTime() < Date.now()
}

export default isDateExpired
