import { translateInputName } from './translateInputName'

export const translateError = (error: any) => {
  if (typeof error !== 'string') return error

  return error
    .split(/( |:|,|\.|@|;|!|"|')/)
    .map(translateInputName)
    .join('')
}
