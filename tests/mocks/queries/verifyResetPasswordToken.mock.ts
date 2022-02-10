import { MockedResponse } from '@apollo/client/testing'
import { VerifyResetPasswordTokenDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'

export const verifyResetPasswordTokenMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: VerifyResetPasswordTokenDocument,
    variables: {
      token: mockVariables.token
    }
  },
  result: {
    data: {
      verifyResetPasswordToken: {
        accessToken: mockVariables.token
      }
    }
  },
  error
})
