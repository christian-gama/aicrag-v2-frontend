import { MockedResponse } from '@apollo/client/testing'
import { SignUpDocument } from '@/services/api'
import userFragmentMock from '../fragments/userFragment.mock'
import variablesMock from '../variables.mock'

const signUpMock = (
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
      name: input?.name ?? variablesMock.name,
      email: input?.email ?? variablesMock.email,
      password: input?.password ?? variablesMock.password,
      passwordConfirmation:
        input?.passwordConfirmation ?? variablesMock.passwordConfirmation
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

export default signUpMock
