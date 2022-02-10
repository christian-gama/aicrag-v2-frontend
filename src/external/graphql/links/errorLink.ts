import { onError } from '@apollo/client/link/error'
import { translateError } from '@/helpers'
import { InternalError, NetworkError } from '@/services/errors'
import { makeRefreshTokenStorage } from '@/external/factories/storage/auth'
import { authVar } from '../reactiveVars/authVar'
import { popoverVar } from '../reactiveVars/popoverVar'

export const errorLink = onError(
  ({ networkError, graphQLErrors, operation }) => {
    if (operation.getContext().response?.status === 429) {
      popoverVar.setPopover(
        'Houveram muitas requisições - seu IP foi bloqueado temporariamente.',
        'error'
      )

      return
    }

    if (graphQLErrors && graphQLErrors.length > 0) {
      const error = graphQLErrors[0]

      for (const graphQLError of graphQLErrors) {
        const errorCode = graphQLError.extensions.code
        const isTokenError = graphQLError.message.match(/token/gi)

        if (errorCode === '401' && isTokenError) {
          return handleUnauthenticatedUser()
        }
      }

      const isBadInputError = error.extensions.code === 'BAD_USER_INPUT'
      if (isBadInputError) {
        return popoverVar.setPopover(new InternalError().message, 'error')
      }

      const isTokenError = !error.message.includes('token')
      if (isTokenError) {
        return popoverVar.setPopover(translateError(error.message), 'error')
      }

      return
    }

    if (networkError) {
      popoverVar.setPopover(new NetworkError().message, 'error')
    }
  }
)

const handleUnauthenticatedUser = () => {
  const refreshTokenStorage = makeRefreshTokenStorage()

  const wasPreviouslyLoggedIn = !!refreshTokenStorage.get()
  if (wasPreviouslyLoggedIn) {
    popoverVar.setPopover(
      'Sua sessão expirou. Faça o login novamente para continuar usando o sistema',
      'error'
    )
  }

  authVar.logout()
}
