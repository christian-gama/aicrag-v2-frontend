import onFocusHandler from '../onFocusHandler'

describe('onFocusHandler', () => {
  const dispatch = jest.fn()
  const event = { currentTarget: { value: 'test' } } as any
  const formData = {}
  const inputState = {
    setOnFocus: jest.fn()
  } as any
  const name = 'test'
  const setFormData = jest.fn() as any
  const setIsFocused = jest.fn() as any
  const uniqueFormName = 'test'
  const validation = { validate: jest.fn() }

  it('should call onFocus if it is defined', () => {
    const onFocus = jest.fn()
    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      onFocus,
      setFormData,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onFocusHandler(params)

    expect(onFocus).toHaveBeenCalled()
  })

  it('should not call onFocus if it is undefined', () => {
    const onFocus = undefined

    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      onFocus,
      setFormData,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onFocusHandler(params)

    expect(onFocus).toBeUndefined()
  })

  it('should call dispatch with the correct value', () => {
    const onFocus = undefined

    const params = {
      dispatch,
      event,
      formData,
      inputState,
      name,
      onFocus,
      setFormData,
      setIsFocused,
      uniqueFormName,
      validation
    }

    onFocusHandler(params)

    expect(dispatch).toHaveBeenCalledWith(setFormData({ [name]: inputState.value, name: uniqueFormName }))
    expect(dispatch).toHaveBeenCalledWith(setIsFocused({ name: uniqueFormName, isFocused: true }))
  })
})
