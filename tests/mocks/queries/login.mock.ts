import { MockedResponse } from '@apollo/client/testing'
import { LoginDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { tokenFragmentMock, userFragmentMock } from '../fragments'

export const loginMock = (
  input?: {
    email?: string
    password?: string
  },
  options?: {
    error?: Error
    typename?: 'ActiveAccount' | 'InactiveAccount'
  }
): MockedResponse<Record<string, any>> => ({
  request: {
    query: LoginDocument,
    variables: {
      email: input?.email ?? mockVariables.email,
      password: input?.password ?? mockVariables.password
    }
  },
  result: {
    data: {
      login:
        options?.typename === 'InactiveAccount'
          ? {
              accessToken: tokenFragmentMock('access'),
              message: mockVariables.message,
              __typename: 'InactiveAccount'
            }
          : {
              refreshToken: tokenFragmentMock('refresh'),
              accessToken: tokenFragmentMock('access'),
              __typename: 'ActiveAccount',
              ...userFragmentMock
            }
    }
  },
  error: options?.error
})
