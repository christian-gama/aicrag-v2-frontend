import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { mockVariables } from '@/tests/mocks'
import { getUserByToken } from '../getUserByToken'

describe('getUserIdByToken', () => {
  it('returns a userId if accessToken is not null', () => {
    const accessTokenStorage = makeAccessTokenStorage()
    accessTokenStorage.set(mockVariables.token)

    const userId = getUserByToken('userId')

    expect(userId).toBe(mockVariables.userId)
  })

  it('returns null if accessToken is null', () => {
    const accessTokenStorage = makeAccessTokenStorage()
    accessTokenStorage.reset()

    const userId = getUserByToken('userId')

    expect(userId).toBeNull()
  })
})
