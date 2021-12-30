import tryToSubmit from '../tryToSubmit'

describe('tryToSubmit', () => {
  const dispatch = jest.fn()
  const setErrorMessage = jest.fn() as any
  const setIsSubmitted = jest.fn() as any
  const setIsValid = jest.fn() as any
  const submitHandler = jest.fn() as any

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call setIsSubmitted with true regardless of the output', async () => {
    await tryToSubmit({
      dispatch,
      setErrorMessage,
      setIsSubmitted,
      setIsValid,
      submitHandler
    })

    expect(setIsSubmitted).toHaveBeenCalledWith(true)
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
      submitHandler
    })

    expect(setErrorMessage).toHaveBeenCalledWith('error message')
    expect(setIsValid).toHaveBeenCalledWith(false)
  })
})
