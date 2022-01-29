import { Reducer } from 'redux'
import { mailerCountdownReducer } from '@/context/models/mailerCountdown'
import { RootState } from '@/context/store'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

export const mailerCountdownMock: Store = {
  reducer: { mailerCountdown: mailerCountdownReducer },
  preloadedState: {
    mailerCountdown: {
      timeLeftInSeconds: 60,
      isOnCountdown: false
    }
  }
}
