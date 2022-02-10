import jwtDecode from 'jwt-decode'
import { makeAccessTokenStorage } from '@/external/factories/storage/auth'

export const getUserByToken = <
  T extends 'userId' | 'email' | 'name' | 'currency' | 'role'
>(
    property: T
  ) => {
  const accessToken = makeAccessTokenStorage().get()

  return accessToken
    ? (jwtDecode<{
        currency: 'BRL' | 'USD'
        userId: string
        email: string
        name: string
        role: string
      }>(accessToken)[property] as T extends 'currency'
        ? 'BRL' | 'USD'
        : string)
    : null
}
