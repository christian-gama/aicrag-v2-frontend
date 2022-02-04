import { capitalize } from './capitalize'

export const formatName = (name: string) => {
  return capitalize(name).split(' ')[0]
}
