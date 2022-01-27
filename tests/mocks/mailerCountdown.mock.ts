import { Reducer } from 'react'
import { mailerCountdownReducer } from '@/context/models/mailerCountdown/mailerCountdown.reducer'
import { RootState } from '@/context/store'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

const mailerCountdownMock: Store = {
  reducer: { mailerCountdown: mailerCountdownReducer },
  preloadedState: {
    mailerCountdown: {
      timeLeftInSeconds: 60,
      isOnCountdown: false
    }
  }
}

export default mailerCountdownMock
