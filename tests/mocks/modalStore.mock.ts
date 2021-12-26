import { Reducer } from 'react'
import { RootState } from '@/infra/store'
import modal from '@/infra/store/modal'

type Store = {
  reducer: Reducer<any, any>
  preloadedState: Partial<RootState>
}

const modalStoreMock: Store = {
  reducer: modal,
  preloadedState: {
    modal: {
      isOpen: true
    }
  }
}

export default modalStoreMock
