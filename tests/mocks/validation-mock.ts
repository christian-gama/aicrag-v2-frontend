export const validationMock = (isValid) => {
  return (value: string): { isValid: boolean, error: string } => {
    return {
      isValid: isValid,
      error: isValid ? '' : 'Error'
    }
  }
}
