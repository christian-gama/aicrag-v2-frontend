import { MockedResponse } from '@apollo/client/testing'
import { LoginDocument } from '@/external/graphql/generated'
import tokenFragmentMock from '../fragments/tokenFragment'
import userFragmentMock from '../fragments/userFragment.mock'
import variablesMock from '../variables.mock'

const loginMock = (
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
      email: input?.email ?? variablesMock.email,
      password: input?.password ?? variablesMock.password
    }
  },
  result: {
    data: {
      login:
        options?.typename === 'InactiveAccount'
          ? {
              accessToken: tokenFragmentMock('access'),
              message: variablesMock.message,
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

export default loginMock
