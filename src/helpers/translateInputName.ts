export const translateInputName = (inputName: string): string => {
  switch (inputName.toLowerCase()) {
    case 'name':
      return 'Nome'

    case 'email':
      return 'Email'

    case 'password':
      return 'Senha'

    case 'passwordconfirmation':
      return 'Confirmação de senha'

    default:
      return inputName
  }
}
