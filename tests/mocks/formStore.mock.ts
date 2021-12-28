import { Reducer } from 'react'
import { RootState } from '@/infra/store'
import { createTaskFormSlice } from '@/main/factories/slices/makeForm'

type Store = {
  reducer: Reducer<any, any>
  preloadedState: Partial<RootState>
}

const formStoreMock: Store = {
  reducer: createTaskFormSlice.reducer,
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
