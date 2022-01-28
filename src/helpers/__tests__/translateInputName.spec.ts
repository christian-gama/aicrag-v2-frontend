import translateInputName from '../translateInputName'

describe('translateInputName', () => {
  it('translates the value', () => {
    expect(translateInputName('password')).toBe('Senha')
    expect(translateInputName('email')).toBe('Email')
    expect(translateInputName('other')).toBe('other')
    expect(translateInputName('name')).toBe('Nome')
    expect(translateInputName('passwordConfirmation')).toBe(
      'Confirmação de senha'
    )
  })
})
