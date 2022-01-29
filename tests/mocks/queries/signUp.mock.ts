import { MockedResponse } from '@apollo/client/testing'
import { SignUpDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { userFragmentMock } from '../fragments'

export const signUpMock = (
  input?: {
    name?: string
    email?: string
    password?: string
    passwordConfirmation?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: SignUpDocument,
    variables: {
      name: input?.name ?? mockVariables.name,
      email: input?.email ?? mockVariables.email,
      password: input?.password ?? mockVariables.password,
      passwordConfirmation:
        input?.passwordConfirmation ?? mockVariables.passwordConfirmation
    }
  },
  result: {
    data: {
      signUp: {
        ...userFragmentMock
      }
    }
  },
  error
})
