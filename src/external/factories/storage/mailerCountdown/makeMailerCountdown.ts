import { MailerCountdownStorage } from '@/services/localStorage/mailerCountdown'

export const makeMailerCountdownStorage = () => {
  return new MailerCountdownStorage()
}
