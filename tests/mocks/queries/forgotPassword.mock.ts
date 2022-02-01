import { MockedResponse } from '@apollo/client/testing'
import { ForgotPasswordDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { userFragmentMock } from '../fragments'

export const forgotPasswordMock = (
  input?: {
    email?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: ForgotPasswordDocument,
    variables: {
      email: input?.email ?? mockVariables.email
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
