import { MockedResponse } from '@apollo/client/testing'
import { VerifyResetPasswordTokenDocument } from '@/external/graphql/generated'
import variablesMock from '../variables.mock'

const verifyResetPasswordTokenMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: VerifyResetPasswordTokenDocument
  },
  result: {
    data: {
      verifyResetPasswordToken: {
        accessToken: variablesMock.token
      }
    }
  },
  error
})

export default verifyResetPasswordTokenMock
