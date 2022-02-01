import { MockedResponse } from '@apollo/client/testing'
import { ResetPasswordDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { userFragmentMock } from '../fragments'

export const resetPasswordMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: ResetPasswordDocument,
    variables: {
      password: mockVariables.password,
      passwordConfirmation: mockVariables.passwordConfirmation
    }
  },
  result: {
    data: {
      resetPassword: {
        refreshToken: mockVariables.token,
        ...userFragmentMock
      }
    }
  },
  error
})
