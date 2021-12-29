import { Reducer } from 'react'
import { RootState } from '@/infra/store'
import { makeReducers } from '@/infra/store/utils/makeReducers'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

const formStoreMock: Store = {
  reducer: { createTaskForm: makeReducers('createTaskForm') },
  preloadedState: {
    createTaskForm: {
      errorMessage: '',
      formData: {},
      isDirty: false,
      isSubmitted: false,
      isSubmitting: false,
      isValid: false,
      isValidating: false
    }
  }
}

export default formStoreMock
