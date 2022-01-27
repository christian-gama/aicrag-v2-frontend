import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import isDateExpired from '@/helpers/isDateExpired'
import makeMailerCountdownStorage from '@/external/factories/storage/mailerCountdown/makeMailerCountdown'
import {
  MailerCountdownStates,
  SetTimePayload
} from './protocols/mailerCountdown.model'

class Countdown {
  defaultTime = 60
  storage = makeMailerCountdownStorage()

  get timeLeft () {
    return this.storage.get()
  }

  get initialState (): MailerCountdownStates {
    return {
      timeLeftInSeconds: this.getSeconds(),
      isOnCountdown:
        this.timeLeft !== null ? !isDateExpired(new Date(this.timeLeft)) : false
    }
  }

  getSeconds () {
    return this.timeLeft !== null
      ? Math.ceil(
        DateTime.fromISO(this.timeLeft).toSeconds() -
            DateTime.now().toSeconds()
      )
      : this.defaultTime
  }
}

const countdown = new Countdown()

const mailerCountdownSlice = createSlice({
  name: 'mailerCountdown',
  initialState: countdown.initialState,
  reducers: {
    startCountdown: (state) => {
      state.timeLeftInSeconds = countdown.defaultTime
      state.isOnCountdown = true

      countdown.storage.set(state.timeLeftInSeconds.toString())
    },

    stopCountdown: (state) => {
      countdown.storage.reset()

      state.isOnCountdown = false
    },

    setTimeLeft: (state, action: SetTimePayload) => {
      state.timeLeftInSeconds = action.payload.time
    },

    verifyCountdown: (state) => {
      const isExpired =
        countdown.timeLeft !== null
          ? isDateExpired(new Date(countdown.timeLeft))
          : true

      if (isExpired) {
        state.isOnCountdown = false
        state.timeLeftInSeconds = countdown.defaultTime

        countdown.storage.reset()
      } else {
        state.isOnCountdown = true
        state.timeLeftInSeconds = countdown.getSeconds()
      }
    }
  }
})

export default mailerCountdownSlice
