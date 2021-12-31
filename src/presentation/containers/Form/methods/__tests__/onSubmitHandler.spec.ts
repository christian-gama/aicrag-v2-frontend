import handleValidation from '../handleValidation'
import onSubmitHandler from '../onSubmitHandler'
import tryToSubmit from '../tryToSubmit'

jest.mock('../handleValidation')
jest.mock('../tryToSubmit')

describe('onSubmitHandler', () => {
  const dispatch = jest.fn()
  const handleValidationMock = handleValidation as jest.Mock
  const setErrorMessage = jest.fn() as any
  const setIsSubmitted = jest.fn() as any
  const setIsSubmitting = jest.fn() as any
  const setIsValid = jest.fn() as any
  const setIsValidating = jest.fn() as any
  const submitHandler = jest.fn()
  const tryToSubmitMock = tryToSubmit as jest.Mock
  const event = { preventDefault: jest.fn() } as any
  const name = 'form'
  const validation = {
    validate: jest.fn()
  }
  const formData = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call tryToSubmit if handleValidation does not return an error', async () => {
    await onSubmitHandler({
      dispatch,
      event,
      formData,
      setErrorMessage,
      setIsSubmitted,
      setIsSubmitting,
      setIsValid,
      setIsValidating,
      submitHandler,
      validation,
      name
    })

    expect(tryToSubmitMock).toHaveBeenCalled()
  })

  it('should not call tryToSubmit if handleValidation return an error', async () => {
    handleValidationMock.mockReturnValue('error message')

    await onSubmitHandler({
      dispatch,
      event,
      formData,
      setErrorMessage,
      setIsSubmitted,
      setIsSubmitting,
      setIsValid,
      setIsValidating,
      submitHandler,
      validation,
      name
    })

    expect(tryToSubmit).not.toHaveBeenCalled()
  })
})
