import { MockedResponse } from '@apollo/client/testing'
import { UpdatePasswordDocument } from '@/external/graphql/generated'
import { userFragmentMock } from '../fragments'
import { mockVariables } from '..'

export const updatePasswordMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: UpdatePasswordDocument,
    variables: {
      passwordConfirmation: mockVariables.passwordConfirmation,
      currentPassword: mockVariables.currentPassword,
      password: mockVariables.password
    }
  },
  result: {
    data: {
      updatePassword: {
        ...userFragmentMock
      }
    }
  },
  error
})
