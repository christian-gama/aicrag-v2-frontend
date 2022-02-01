import { AccessTokenStorage } from '@/services/localStorage/auth'

export const makeAccessTokenStorage = () => {
  return new AccessTokenStorage()
}
