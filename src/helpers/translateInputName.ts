export const translateInputName = (inputName: string): string => {
  const inputs: { [key: string]: string } = {
    passwordconfirmation: 'Confirmação de senha',
    currentpassword: 'Senha atual',
    commentary: 'Observação',
    taskid: 'Identificação',
    message: 'Mensagem',
    duration: 'Duração',
    password: 'Senha',
    status: 'Status',
    email: 'Email',
    token: 'Token',
    name: 'Nome',
    type: 'Tipo',
    date: 'Data',
    uuid: 'UUID',
    pin: 'Pin',
    id: 'ID'
  }

  return inputs[inputName.toLocaleLowerCase()] || inputName
}
