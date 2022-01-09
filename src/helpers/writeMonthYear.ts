import capitalize from './capitalize'

const writeMonthYear = (monthLong: string, year: number): string => {
  return `${capitalize(monthLong)}, ${year}`
}

export default writeMonthYear
