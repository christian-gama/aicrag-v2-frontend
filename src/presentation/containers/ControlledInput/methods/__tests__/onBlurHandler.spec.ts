import onBlurHandler from '../onBlurHandler'

describe('onBlurHandler', () => {
  const dispatch = jest.fn()
  const event = { currentTarget: { value: 'test' } } as any
  const formData = {}
  const inputState = {
    setOnBlur: jest.fn()
  } as any
  const name = 'test'
  const setFormData = jest.fn() as any
  const setIsChanging = jest.fn() as any
  const setIsDirty = jest.fn() as any
  const setIsFocused = jest.fn() as any
  const validation = { validate: jest.fn() }
  const uniqueFormName = 'test'

  it('should call onBlur if it is defined', () => {
    const onBlur = jest.fn()
    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      onBlur,
      setFormData,
      setIsChanging,
      setIsDirty,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onBlurHandler(params)

    expect(onBlur).toHaveBeenCalled()
  })

  it('should not call onBlur if it is undefined', () => {
    const onBlur = undefined

    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      onBlur,
      setFormData,
      setIsChanging,
      setIsDirty,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onBlurHandler(params)

    expect(onBlur).toBeUndefined()
  })

  it('should call dispatch with the correct values', () => {
    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      setFormData,
      setIsChanging,
      setIsDirty,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onBlurHandler(params)

    expect(dispatch).toHaveBeenCalledWith(setFormData({ [name]: inputState.value, name: uniqueFormName }))
    expect(dispatch).toHaveBeenCalledWith(setIsDirty({ name: uniqueFormName, isDirty: true }))
    expect(dispatch).toHaveBeenCalledWith(setIsFocused({ name: uniqueFormName, isFocused: false }))
    expect(dispatch).toHaveBeenCalledWith(setIsChanging({ name: uniqueFormName, isChanging: false }))
  })

  it('should call validate with the correct values', () => {
    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      setFormData,
      setIsChanging,
      setIsDirty,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onBlurHandler(params)

    expect(validation.validate).toHaveBeenCalledWith(name, { ...formData, [name]: event.currentTarget.value })
  })

  it('should call setOnBlur with the correct error', () => {
    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      setFormData,
      setIsChanging,
      setIsDirty,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onBlurHandler(params)

    expect(inputState.setOnBlur).toHaveBeenCalledWith(
      validation.validate(name, { ...formData, [name]: event.currentTarget.value })
    )
  })
})
