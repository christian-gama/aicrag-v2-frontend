import handleValidation from '../handleValidation'

describe('handleValidation', () => {
  const dispatch = jest.fn()
  const setErrorMessage = jest.fn() as any
  const setIsValid = jest.fn() as any
  const setIsValidating = jest.fn() as any
  const name = 'form'
  const formData = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should not run validation if validation is undefined', () => {
    handleValidation({
      dispatch,
      formData,
      name,
      setErrorMessage,
      setIsValid,
      setIsValidating
    })

    expect(setIsValidating).toHaveBeenNthCalledWith(1, { isValidating: true, name })
    expect(setIsValid).toHaveBeenCalledWith({ isValid: true, name })
    expect(setIsValidating).toHaveBeenNthCalledWith(2, { isValidating: false, name })
  })

  it('should call setErrorMessage with the error message, setIsValid to false and setIsValidating to false if validation fails', () => {
    const validation = {
      validate: jest.fn().mockReturnValue('error message')
    }

    handleValidation({
      dispatch,
      formData,
      name,
      setErrorMessage,
      setIsValid,
      setIsValidating,
      validation
    })

    expect(setErrorMessage).toHaveBeenCalledWith({ errorMessage: 'error message', name })
    expect(setIsValid).toHaveBeenNthCalledWith(1, { isValid: false, name })
    expect(setIsValidating).toHaveBeenNthCalledWith(2, { isValidating: false, name })
  })

  it('should return undefined if validation succeeds', () => {
    const validation = {
      validate: jest.fn().mockReturnValue(undefined)
    }

    const error = handleValidation({
      dispatch,
      formData,
      name,
      setErrorMessage,
      setIsValid,
      setIsValidating,
      validation
    })

    expect(error).toBeUndefined()
  })
})
