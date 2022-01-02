import onFocusHandler from '../onFocusHandler'

describe('onFocusHandler', () => {
  const dispatch = jest.fn()
  const event = { currentTarget: { value: 'test' } } as any
  const data = {}
  const inputState = {
    setOnFocus: jest.fn()
  } as any
  const name = 'test'
  const validator = { validate: jest.fn() }

  it('should call onFocus if it is defined', () => {
    const onFocus = jest.fn()
    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,
      onFocus,
      validator
    }

    onFocusHandler(params)

    expect(onFocus).toHaveBeenCalled()
  })

  it('should not call onFocus if it is undefined', () => {
    const onFocus = undefined

    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,
      onFocus,
      validator
    }

    onFocusHandler(params)

    expect(onFocus).toBeUndefined()
  })

  it('should call dispatch with the correct value', () => {
    const onFocus = undefined

    const params = {
      dispatch,
      event,
      data,
      inputState,
      name,
      onFocus,
      validator
    }

    onFocusHandler(params)

    expect(dispatch).toHaveBeenCalledWith({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { ...data, [name]: event.currentTarget.value } }
    })
    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: true } })
  })
})
