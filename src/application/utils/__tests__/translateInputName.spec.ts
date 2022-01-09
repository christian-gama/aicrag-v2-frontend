import translateInputName from '../translateInputName'

describe('translateInputName', () => {
  it('should translate input name', () => {
    expect(translateInputName('name')).toBe('Nome')
    expect(translateInputName('email')).toBe('Email')
    expect(translateInputName('password')).toBe('Senha')
    expect(translateInputName('passwordConfirmation')).toBe('Confirmação de senha')
    expect(translateInputName('other')).toBe('other')
  })
})
