import translateError from './translateError'

const getErrorMessage = (error: any) => {
  const graphQLErrorCode = error.networkError?.result?.errors[0].extensions?.code
  if (graphQLErrorCode === 'BAD_USER_INPUT') return 'Algo deu errado, tente novamente mais tarde'

  const graphQLErrorMessage = error.networkError?.result?.errors[0].message
  if (graphQLErrorMessage) {
    return translateError(graphQLErrorMessage)
  }

  const networkErrorMessage = error.networkError?.message
  if (networkErrorMessage) return 'Houve um problema com a conexão, tente novamente mais tarde'

  return error.message
}

export default getErrorMessage
