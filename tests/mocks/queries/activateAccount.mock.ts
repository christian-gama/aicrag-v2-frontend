import { MockedResponse } from '@apollo/client/testing'
import { ActivateAccountDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { tokenFragmentMock, userFragmentMock } from '../fragments'

export const activateAccountMock = (
  input?: {
    userId?: string
    activationPin?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: ActivateAccountDocument,
    variables: {
      userId: input?.userId ?? mockVariables.uuid,
      activationPin: input?.activationPin ?? mockVariables.pin
    }
  },
  result: {
    data: {
      activateAccount: {
        ...userFragmentMock,
        refreshToken: tokenFragmentMock('refresh'),
        accessToken: tokenFragmentMock('access')
      }
    }
  },
  error
})
