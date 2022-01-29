import { MockedResponse } from '@apollo/client/testing'
import { ResetPasswordDocument } from '@/external/graphql/generated'
import userFragmentMock from '../fragments/userFragment.mock'
import variablesMock from '../variables.mock'

const resetPasswordMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: ResetPasswordDocument,
    variables: {
      password: variablesMock.password,
      passwordConfirmation: variablesMock.passwordConfirmation
    }
  },
  result: {
    data: {
      resetPassword: {
        refreshToken: variablesMock.token,
        ...userFragmentMock
      }
    }
  },
  error
})

export default resetPasswordMock
