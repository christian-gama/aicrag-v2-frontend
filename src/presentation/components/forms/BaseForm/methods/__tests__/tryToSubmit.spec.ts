import tryToSubmit from '../tryToSubmit'

describe('tryToSubmit', () => {
  const dispatch = jest.fn()
  const submitHandler = jest.fn() as any
  const setIsErrorPopoverOpen = jest.fn()
  const setIsSuccessPopoverOpen = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call setIsSubmitted with true regardless of the output', async () => {
    await tryToSubmit({
      dispatch,
      submitHandler,
      setIsErrorPopoverOpen,
      setIsSuccessPopoverOpen
    })

    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_IS_SUBMITTED', payload: { isSubmitted: true } })
  })

  it('should catch error if submitHandler throws an error', async () => {
    submitHandler.mockImplementation(() => {
      throw new Error('error message')
    })

    await tryToSubmit({
      dispatch,
      submitHandler,
      setIsErrorPopoverOpen,
      setIsSuccessPopoverOpen
    })

    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_ERROR', payload: { error: 'error message' } })
    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
    expect(setIsErrorPopoverOpen).toHaveBeenCalledWith(true)
  })
})
