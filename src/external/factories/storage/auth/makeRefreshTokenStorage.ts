import RefreshTokenStorage from '@/services/localStorage/auth/refreshTokenStorage'

const makeRefreshTokenStorage = () => {
  return new RefreshTokenStorage()
}

export default makeRefreshTokenStorage
