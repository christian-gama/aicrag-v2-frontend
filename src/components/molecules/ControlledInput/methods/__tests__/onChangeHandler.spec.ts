import onChangeHandler from '../onChangeHandler'

describe('onChangeHandler', () => {
  const dispatch = jest.fn()
  const event = { target: { value: 'test' } } as any
  const data = {}
  const name = 'test'
  const isTouched = true
  const validator = { validate: jest.fn() }

  it('should call onChange if it is defined', () => {
    const onChange = jest.fn()
    const params = {
      dispatch,
      event,
      data,
      name,
      isTouched,
      onChange,
      validator
    }

    onChangeHandler(params)

    expect(onChange).toHaveBeenCalled()
  })

  it('should not call onChange if it is undefined', () => {
    const onChange = undefined

    const params = {
      dispatch,
      event,
      data,
      name,
      isTouched,
      onChange,
      validator
    }

    onChangeHandler(params)

    expect(onChange).toBeUndefined()
  })

  it('should call dispatch with the correct value', () => {
    const params = {
      dispatch,
      event,
      data,
      name,
      isTouched,
      validator
    }

    onChangeHandler(params)

    expect(dispatch).toHaveBeenCalledWith({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: true } })
  })
})
