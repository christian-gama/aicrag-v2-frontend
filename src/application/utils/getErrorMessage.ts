const getErrorMessage = (error: any) => {
  const graphQLErrorMessage = error.networkError?.result?.errors[0].message

  if (graphQLErrorMessage) return graphQLErrorMessage

  return error.message
}

export default getErrorMessage
