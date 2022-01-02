import tryToSubmit from '../tryToSubmit'

describe('tryToSubmit', () => {
  const dispatch = jest.fn()
  const submitHandler = jest.fn() as any
  const setIsAlertOpen = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call setIsSubmitted with true regardless of the output', async () => {
    await tryToSubmit({
      dispatch,
      submitHandler,
      setIsAlertOpen
    })

    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_IS_SUBMITTED', payload: { isSubmitted: true } })
  })

  it('should catch error if submitHandler throws an error', async () => {
    submitHandler.mockImplementation(() => {
      throw new Error('error message')
    })

    await tryToSubmit({
      dispatch,
      submitHandler,
      setIsAlertOpen
    })

    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ERROR_MESSAGE', payload: { errorMessage: 'error message' } })
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_IS_VALID', payload: { isValid: false } })
    expect(setIsAlertOpen).toHaveBeenCalledWith(true)
  })
})
