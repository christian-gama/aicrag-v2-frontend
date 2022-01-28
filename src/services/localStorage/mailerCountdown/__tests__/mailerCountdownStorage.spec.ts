import { DateTime, Settings } from 'luxon'
import MailerCountdownStorage from '../mailerCountdownStorage'

const makeSut = () => {
  return new MailerCountdownStorage()
}

describe('mailerCountdownStoragepec', () => {
  it('returns null if no expire date is stored', () => {
    const sut = makeSut()

    const expireDate = sut.get()

    expect(expireDate).toBeNull()
  })

  it('returns an expire date if it is stored', () => {
    const expectedNow = DateTime.local(2021, 6, 1, 23, 0, 0)
    Settings.now = () => expectedNow.toMillis()
    const sut = makeSut()
    const timeLeftInSeconds = '60'
    sut.set(timeLeftInSeconds)

    const result = sut.get()

    expect(result).toBe(
      DateTime.now().plus({ seconds: 60 }).toJSDate().toISOString()
    )
  })

  it('removes the expire date if reset is called', () => {
    const sut = makeSut()
    sut.set('60')
    sut.reset()

    const result = sut.get()

    expect(result).toBeNull()
  })
})
