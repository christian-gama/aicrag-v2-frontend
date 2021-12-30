import Maybe from '@/application/utils/typescript/maybe.model'
import { formActions } from '../../application/models/form'

export type FormStates = {
  isDirty: boolean
  isSubmitted: boolean
  isSubmitting: boolean
  isValid: boolean
  isValidating: boolean
  errorMessage: Maybe<Error['message']>
  formData: { [key: string]: any }
}

export type FormPayloads = {
  utilityPayload: {
    payload: boolean
  }

  errorPayload: {
    payload: Maybe<Error['message']>
  }

  inputPayload: {
    payload: { [key: string]: any }
  }
}

export type FormActions = typeof formActions
