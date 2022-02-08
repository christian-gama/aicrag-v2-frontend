import { MockedResponse } from '@apollo/client/testing'
import { GetMeDocument } from '@/external/graphql/generated'
import { tokenFragmentMock, userFragmentMock } from '../fragments'

export const getMeMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: GetMeDocument
  },
  result: {
    data: {
      getMe: {
        ...userFragmentMock,
        refreshToken: tokenFragmentMock('refresh'),
        accessToken: tokenFragmentMock('access')
      }
    }
  },
  error
})
