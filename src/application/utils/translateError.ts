import translateInputName from './translateInputName'

const translateError = (error: any) => {
  if (typeof error !== 'string') return error

  let field = error.split(':')

  if (field.length > 1) {
    const newError = error.replace(field[1].trim(), translateInputName(field[1].trim()))

    if (newError === error) {
      field = error.split(' ')

      if (field.length > 1) {
        return error.replace(field[0].trim(), translateInputName(field[0].trim()))
      }
    }

    return newError
  }

  return error
}

export default translateError
