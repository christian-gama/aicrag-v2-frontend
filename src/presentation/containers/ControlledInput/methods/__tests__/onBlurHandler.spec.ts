import onBlurHandler from '../onBlurHandler'

describe('onBlurHandler', () => {
  const dispatch = jest.fn()
  const event = { currentTarget: { value: 'test' } } as any
  const data = {}
  const inputState = {
    setOnBlur: jest.fn()
  } as any
  const name = 'test'
  const validator = { validate: jest.fn() }

  it('should call onBlur if it is defined', () => {
    const onBlur = jest.fn()
    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,
      onBlur,
      validator
    }

    onBlurHandler(params)

    expect(onBlur).toHaveBeenCalled()
  })

  it('should not call onBlur if it is undefined', () => {
    const onBlur = undefined

    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,
      onBlur,
      validator
    }

    onBlurHandler(params)

    expect(onBlur).toBeUndefined()
  })

  it('should call dispatch with the correct values', () => {
    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,
      validator
    }

    onBlurHandler(params)

    expect(dispatch).toHaveBeenCalledWith({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { ...data, [name]: event.currentTarget.value } }
    })
    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: false } })
    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_IS_DIRTY', payload: { isDirty: true } })
    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: false } })
  })

  it('should call validate with the correct values', () => {
    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,
      validator
    }

    onBlurHandler(params)

    expect(validator.validate).toHaveBeenCalledWith(name, { ...data, [name]: event.currentTarget.value })
  })

  it('should call setOnBlur with the correct error', () => {
    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,

      validator
    }

    onBlurHandler(params)

    expect(inputState.setOnBlur).toHaveBeenCalledWith(
      validator.validate(name, { ...data, [name]: event.currentTarget.value })
    )
  })
})
