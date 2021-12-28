import Maybe from '@/application/utils/typescript/maybe.model'
import { makeFormSlice } from '../form'

type FormNames = 'createTaskForm' | 'updateTaskForm'

type FormStates = {
  isDirty: boolean
  isSubmitted: boolean
  isSubmitting: boolean
  isValid: boolean
  isValidating: boolean
  errorMessage: Maybe<Error['message']>
  formData: { [key: string]: any }
}

type FormUtilityPayload = {
  payload: boolean
}

type FormErrorPayload = {
  payload: Maybe<Error['message']>
}

type FormInputPayload = {
  payload: { [key: string]: any }
}

type FormActions = ReturnType<typeof makeFormSlice>['actions']

export type IForm = {
  actions: FormActions
  name: FormNames
  reducer: ReturnType<typeof makeFormSlice>['reducer']
  states: FormStates
  payloads: {
    error: FormErrorPayload
    utility: FormUtilityPayload
    input: FormInputPayload
  }
}
