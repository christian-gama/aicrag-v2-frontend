import { AccessTokenStorage } from '..'

const makeSut = () => {
  return new AccessTokenStorage()
}

describe('accessTokenStorage', () => {
  it('returns null if no token is stored', () => {
    const sut = makeSut()

    const accessToken = sut.get()

    expect(accessToken).toBeNull()
  })

  it('returns a token if token is stored', () => {
    const sut = makeSut()
    const accessToken = 'any_token'
    sut.set(accessToken)

    const result = sut.get()

    expect(result).toBe(accessToken)
  })

  it('removes the token if reset is called', () => {
    const sut = makeSut()
    const accessToken = 'any_token'
    sut.set(accessToken)
    sut.reset()

    const result = sut.get()

    expect(result).toBeNull()
  })
})
