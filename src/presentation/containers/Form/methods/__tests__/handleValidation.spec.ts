import handleValidation from '../handleValidation'

describe('handleValidation', () => {
  const dispatch = jest.fn()
  const setErrorMessage = jest.fn() as any
  const setIsValid = jest.fn() as any
  const setIsValidating = jest.fn() as any
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
      setErrorMessage,
      formData,
      setIsValid,
      setIsValidating
    })

    expect(setIsValidating).toHaveBeenNthCalledWith(1, true)
    expect(setIsValid).toHaveBeenCalledWith(true)
    expect(setIsValidating).toHaveBeenNthCalledWith(2, false)
  })

  it('should call setErrorMessage with the error message, setIsValid to false and setIsValidating to false if validation fails', () => {
    const validation = {
      validate: jest.fn().mockReturnValue('error message')
    }

    handleValidation({
      validation,
      dispatch,
      setErrorMessage,
      formData,
      setIsValid,
      setIsValidating
    })

    expect(setErrorMessage).toHaveBeenCalledWith('error message')
    expect(setIsValid).toHaveBeenNthCalledWith(1, false)
    expect(setIsValidating).toHaveBeenNthCalledWith(2, false)
  })

  it('should return undefined if validation succeeds', () => {
    const validation = {
      validate: jest.fn().mockReturnValue(undefined)
    }

    const error = handleValidation({
      validation,
      dispatch,
      setErrorMessage,
      formData,
      setIsValid,
      setIsValidating
    })

    expect(error).toBeUndefined()
  })
})
