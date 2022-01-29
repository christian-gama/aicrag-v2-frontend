export const isDateExpired = (date: Date) => {
  return date.getTime() < Date.now()
}
