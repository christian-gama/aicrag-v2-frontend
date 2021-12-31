import Maybe from '@/application/utils/typescript/maybe.model'
import { formActions } from '..'

export type FormProperties = {
  name: string
  isDirty: boolean
  isSubmitted: boolean
  isSubmitting: boolean
  isValid: boolean
  isValidating: boolean
  errorMessage: Maybe<Error['message']>
  formData: { [key: string]: any }
}

export type FormStates = {
  forms: FormProperties[]
}

export type FormPayloads = {
  utilityPayload: {
    payload: {
      [K in keyof Omit<FormProperties, 'errorMessage' | 'formData'>]: FormProperties[K]
    }
  }

  errorPayload: {
    payload: {
      errorMessage: Maybe<Error['message']>
      name: string
    }
  }

  inputPayload: {
    payload: {
      name: string
      [key: string]: any
    }
  }

  namePayload: {
    payload: string
  }
}

export type FormActions = typeof formActions
