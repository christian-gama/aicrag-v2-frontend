import translateInputName from './translateInputName'

const translateError = (error: any) => {
  if (typeof error !== 'string') return error

  return error
    .split(/( |:|,|\.|@|;|!|"|')/)
    .map(translateInputName)
    .join('')
}

export default translateError
