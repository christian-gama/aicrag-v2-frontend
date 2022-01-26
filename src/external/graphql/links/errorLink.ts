import { onError } from '@apollo/client/link/error'
import translateError from '@/helpers/translateError'
import NetworkError from '@/services/errors/connectionError'
import InternalError from '@/services/errors/internalError'
import makeAccessTokenStorage from '@/external/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/external/factories/storage/auth/makeRefreshTokenStorage'
import { authVar } from '../reactiveVars/authVar'
import { popoverVar } from '../reactiveVars/popoverVar'

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors && graphQLErrors.length > 0) {
    for (const error of graphQLErrors) {
      const errorCode = error.extensions.code
      const isTokenError = error.message.match(/token/gi)

      if (errorCode === '401' && isTokenError) {
        authVar.logout()

        const accessToken = makeAccessTokenStorage()
        const refreshToken = makeRefreshTokenStorage()

        const wasPreviouslyLoggedIn = !!refreshToken.get()
        if (wasPreviouslyLoggedIn) {
          popoverVar.setPopover(
            'Sua sessão expirou. Por favor, entre novamente',
            'error'
          )
        }

        accessToken.reset()
        refreshToken.reset()

        return
      }
    }

    const error = graphQLErrors[0]

    const isBadInputError = error.extensions.code === 'BAD_USER_INPUT'
    if (isBadInputError) {
      popoverVar.setPopover(new InternalError().message, 'error')

      return
    }

    const isTokenError = !error.message.includes('token')
    if (isTokenError) {
      popoverVar.setPopover(translateError(error.message), 'error')

      return
    }

    return
  }

  if (networkError) {
    popoverVar.setPopover(new NetworkError().message, 'error')
  }
})

export default errorLink
