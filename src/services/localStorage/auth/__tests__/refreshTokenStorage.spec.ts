import { RefreshTokenStorage } from '..'

const makeSut = () => {
  return new RefreshTokenStorage()
}

describe('refreshTokenStorage', () => {
  it('returns null if no token is stored', () => {
    const sut = makeSut()

    const refreshToken = sut.get()

    expect(refreshToken).toBeNull()
  })

  it('returns a token if token is stored', () => {
    const sut = makeSut()
    const refreshToken = 'any_token'
    sut.set(refreshToken)

    const result = sut.get()

    expect(result).toBe(refreshToken)
  })

  it('removes the token if reset is called', () => {
    const sut = makeSut()
    const refreshToken = 'any_token'
    sut.set(refreshToken)
    sut.reset()

    const result = sut.get()

    expect(result).toBeNull()
  })
})
