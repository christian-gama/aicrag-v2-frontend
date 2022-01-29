import { capitalize } from './capitalize'

export const writeMonthYear = (monthLong: string, year: number): string => {
  return `${capitalize(monthLong)}, ${year}`
}
