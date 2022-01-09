import handleValidation from '../handleValidation'

describe('handleValidation', () => {
  const dispatch = jest.fn()
  const setIsErrorPopoverOpen = jest.fn()
  const data = {
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
      data,
      setIsErrorPopoverOpen
    })

    expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: true } })
    expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: false } })
    expect(dispatch).toHaveBeenNthCalledWith(3, { type: 'FORM/SET_IS_VALID', payload: { isValid: true } })
  })

  it('should call dispatch with the correct values if validation fails', () => {
    const validator = {
      validate: jest.fn().mockReturnValue('error message')
    }

    handleValidation({
      dispatch,
      data,
      setIsErrorPopoverOpen,
      validator
    })

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: 'FORM/SET_ERROR',
      payload: { error: 'Não foi possível continuar, pois há erros que precisam ser corrigidos' }
    })
    expect(dispatch).toHaveBeenNthCalledWith(3, { type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
    expect(dispatch).toHaveBeenNthCalledWith(4, { type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: false } })
    expect(dispatch).toHaveBeenNthCalledWith(5, {
      type: 'INPUT/SET_ERROR',
      payload: { error: { name: 'error message' } }
    })
    expect(dispatch).toHaveBeenNthCalledWith(6, {
      type: 'INPUT/SET_IS_TOUCHED',
      payload: { isTouched: { name: true } }
    })
    expect(dispatch).toHaveBeenNthCalledWith(7, { type: 'INPUT/SET_IS_VALID', payload: { isValid: { name: false } } })
  })

  it('should return undefined if validation succeeds', () => {
    const validator = {
      validate: jest.fn().mockReturnValue(undefined)
    }

    const error = handleValidation({
      dispatch,
      data,
      setIsErrorPopoverOpen,
      validator
    })

    expect(error).toBeUndefined()
  })
})
