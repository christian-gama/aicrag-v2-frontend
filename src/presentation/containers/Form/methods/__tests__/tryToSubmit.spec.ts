import tryToSubmit from '../tryToSubmit'

describe('tryToSubmit', () => {
  const dispatch = jest.fn()
  const setErrorMessage = jest.fn() as any
  const setIsSubmitted = jest.fn() as any
  const setIsValid = jest.fn() as any
  const submitHandler = jest.fn() as any
  const name = 'form'

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call setIsSubmitted with true regardless of the output', async () => {
    await tryToSubmit({
      dispatch,
      setErrorMessage,
      setIsSubmitted,
      setIsValid,
      submitHandler,
      name
    })

    expect(setIsSubmitted).toHaveBeenCalledWith({ isSubmitted: true, name })
  })

  it('should catch error if submitHandler throws an error', async () => {
    submitHandler.mockImplementation(() => {
      throw new Error('error message')
    })

    await tryToSubmit({
      dispatch,
      setErrorMessage,
      setIsSubmitted,
      setIsValid,
      submitHandler,
      name
    })

    expect(setErrorMessage).toHaveBeenCalledWith({ errorMessage: 'error message', name })
    expect(setIsValid).toHaveBeenCalledWith({ isValid: false, name })
  })
})
