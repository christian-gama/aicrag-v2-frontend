import { translateInputName } from '..'

describe('translateInputName', () => {
  it('translates the value', () => {
    expect(translateInputName('other')).toBe('other')
    expect(translateInputName('passwordConfirmation')).toBe(
      'Confirmação de senha'
    )
  })
})
