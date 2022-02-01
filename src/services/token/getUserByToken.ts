import jwtDecode from 'jwt-decode'
import { makeAccessTokenStorage } from '@/external/factories/storage/auth'

export const getUserByToken = (
  property: 'userId' | 'email' | 'name' | 'currency'
) => {
  const accessToken = makeAccessTokenStorage().get()

  return accessToken
    ? jwtDecode<{
      currency: 'BRL' | 'USD'
      userId: string
      email: string
      name: string
    }>(accessToken)[property]
    : null
}
