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
  error?: Error
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
      login: {
        ...userFragmentMock,
        accessToken: tokenFragmentMock('access'),
        refreshToken: tokenFragmentMock('refresh')
      }
    }
  },
  error
})

export default loginMock
