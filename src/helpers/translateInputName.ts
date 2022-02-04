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

    case 'duration':
      return 'Duração'

    case 'taskid':
      return 'Identificação'

    case 'commentary':
      return 'Observação'

    case 'type':
      return 'Tipo'

    case 'date':
      return 'Data'

    default:
      return inputName
  }
}
