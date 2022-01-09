import AccessTokenStorage from '@/services/localStorage/auth/accessTokenStorage'

const makeAccessTokenStorage = () => {
  return new AccessTokenStorage()
}

export default makeAccessTokenStorage
