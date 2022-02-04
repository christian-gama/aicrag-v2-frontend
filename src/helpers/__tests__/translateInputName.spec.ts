import { translateInputName } from '..'

describe('translateInputName', () => {
  it('translates the value', () => {
    expect(translateInputName('password')).toBe('Senha')
    expect(translateInputName('email')).toBe('Email')
    expect(translateInputName('other')).toBe('other')
    expect(translateInputName('name')).toBe('Nome')
    expect(translateInputName('taskid')).toBe('Identificação')
    expect(translateInputName('date')).toBe('Data')
    expect(translateInputName('type')).toBe('Tipo')
    expect(translateInputName('duration')).toBe('Duração')
    expect(translateInputName('commentary')).toBe('Observação')
    expect(translateInputName('passwordConfirmation')).toBe(
      'Confirmação de senha'
    )
  })
})
