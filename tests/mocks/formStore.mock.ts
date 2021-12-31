import { Reducer } from 'react'
import { formReducer } from '@/application/models/form'
import { RootState } from '@/application/store'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

const formStoreMock: Store = {
  reducer: { form: formReducer },
  preloadedState: {
    form: {
      forms: [
        {
          name: 'form',
          errorMessage: undefined,
          formData: {},
          isDirty: false,
          isSubmitted: false,
          isSubmitting: false,
          isValid: false,
          isValidating: false,
          isChanging: false,
          isFocused: false,
          isResetting: false
        }
      ]
    }
  }
}

export default formStoreMock
