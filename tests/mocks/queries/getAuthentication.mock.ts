import { MockedResponse } from '@apollo/client/testing'
import { GetAuthenticationDocument } from '@/external/graphql/generated'

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
        authentication
      }
    }
  },
  error
})
