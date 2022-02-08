import { MockedResponse } from '@apollo/client/testing'
import { UpdateMeDocument } from '@/external/graphql/generated'
import { userFragmentMock } from '../fragments'

export const updateMeMock = (
  input?: {
    name?: string
    email?: string
    currency?: 'BRL' | 'USD'
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: UpdateMeDocument,
    variables: {
      ...input
    }
  },
  result: {
    data: {
      updateMe: {
        ...userFragmentMock
      }
    }
  },
  error
})
