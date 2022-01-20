import { MockedResponse } from '@apollo/client/testing'
import { ForgotPasswordDocument } from '@/services/api'
import userFragmentMock from '../fragments/userFragment.mock'
import variablesMock from '../variables.mock'

const forgotPasswordMock = (
  input?: {
    email?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: ForgotPasswordDocument,
    variables: {
      email: input?.email ?? variablesMock.email
    }
  },
  result: {
    data: {
      forgotPassword: {
        ...userFragmentMock
      }
    }
  },
  error
})

export default forgotPasswordMock
