import { Reducer } from 'redux'
import { filterReducer } from '@/context/models/filter'
import { RootState } from '@/context/store'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

export const filterStoreMock: Store = {
  reducer: { filter: filterReducer },
  preloadedState: {
    filter: {
      filters: {}
    }
  }
}
