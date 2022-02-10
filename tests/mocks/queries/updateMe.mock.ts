import { MockedResponse } from '@apollo/client/testing'
import { UpdateMeDocument } from '@/external/graphql/generated'
import { userFragmentMock } from '../fragments'
import { mockVariables } from '..'

export const updateMeMock = (
  input?: {
    name?: string
    email?: string
    currency?: 'BRL' | 'USD'
  },
  typename: 'UpdateMeNoChanges' | 'UpdateMeHasChanges' = 'UpdateMeHasChanges',
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
        __typename: typename,
        user:
          typename === 'UpdateMeHasChanges' ? userFragmentMock.user : undefined,

        message:
          typename === 'UpdateMeNoChanges' ? mockVariables.message : undefined
      }
    }
  },
  error
})
