import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import isDateExpired from '@/helpers/isDateExpired'
import makeMailerCountdownStorage from '@/external/factories/storage/mailerCountdown/makeMailerCountdown'
import {
  MailerCountdownStates,
  SetTimeLeftPayload
} from './protocols/mailerCountdown.model'

const mailerCountdownStorage = makeMailerCountdownStorage()
const countdownKey = mailerCountdownStorage.get()

const getSeconds = () =>
  countdownKey !== null
    ? Math.ceil(
      DateTime.fromISO(countdownKey).toSeconds() - DateTime.now().toSeconds()
    )
    : 60

const initialMailerCountdownState: MailerCountdownStates = {
  timeLeftInSeconds: getSeconds(),
  isOnCountdown:
    countdownKey !== null ? isDateExpired(new Date(countdownKey)) : true
}

const mailerCountdownSlice = createSlice({
  name: 'mailerCountdown',
  initialState: initialMailerCountdownState,
  reducers: {
    startCountdown: (state) => {
      state.timeLeftInSeconds = 60
      state.isOnCountdown = true

      mailerCountdownStorage.set(state.timeLeftInSeconds.toString())
    },

    stopCountdown: (state) => {
      mailerCountdownStorage.reset()

      state.isOnCountdown = false
    },

    setTimeLeft: (state, action: SetTimeLeftPayload) => {
      state.timeLeftInSeconds = action.payload.timeLeftInSeconds
    },

    verifyCountdown: (state) => {
      const isExpired =
        countdownKey !== null ? isDateExpired(new Date(countdownKey)) : true

      if (isExpired) {
        state.isOnCountdown = false
        state.timeLeftInSeconds = 0

        mailerCountdownStorage.reset()
      } else {
        state.isOnCountdown = true
        state.timeLeftInSeconds = getSeconds()
      }
    }
  }
})

export default mailerCountdownSlice
