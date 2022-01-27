import MailerCountdownStorage from '@/services/localStorage/mailerCountdown'

const makeMailerCountdownStorage = () => {
  return new MailerCountdownStorage()
}

export default makeMailerCountdownStorage
