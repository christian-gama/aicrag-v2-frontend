import handleValidation from '../handleValidation'

describe('handleValidation', () => {
  const dispatch = jest.fn()
  const setIsPopoverOpen = jest.fn()
  const data = {
    name: 'FORM/',
    email: 'FORM/',
    password: 'FORM/',
    passwordConfirmation: 'FORM/'
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should not run validation if validation is undefined', () => {
    handleValidation({
      dispatch,
      data,
      setIsPopoverOpen
    })

    expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: true } })
    expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: false } })
    expect(dispatch).toHaveBeenNthCalledWith(3, { type: 'FORM/SET_IS_VALID', payload: { isValid: true } })
  })

  it('should call setErrorMessage with the error message, setIsValid to false and setIsValidating to false if validation fails', () => {
    const validator = {
      validate: jest.fn().mockReturnValue('error message')
    }

    handleValidation({
      dispatch,
      data,
      setIsPopoverOpen,
      validator
    })

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: 'FORM/SET_ERROR',
      payload: { error: 'error message' }
    })
    expect(dispatch).toHaveBeenNthCalledWith(3, { type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
    expect(dispatch).toHaveBeenNthCalledWith(4, { type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: false } })
  })

  it('should return undefined if validation succeeds', () => {
    const validator = {
      validate: jest.fn().mockReturnValue(undefined)
    }

    const error = handleValidation({
      dispatch,
      data,
      setIsPopoverOpen,
      validator
    })

    expect(error).toBeUndefined()
  })
})
