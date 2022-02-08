import { MockedResponse } from '@apollo/client/testing'
import { GetAuthenticationDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'

export const getAuthenticationMock = (
  authentication: 'partial' | 'protected' | 'none' = 'none',
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: GetAuthenticationDocument
  },
  result: {
    data: {
      getAuthentication: {
        refreshToken: mockVariables.token,
        accessToken: mockVariables.token,
        authentication
      }
    }
  },
  error
})
