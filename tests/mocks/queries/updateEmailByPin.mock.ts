import { MockedResponse } from '@apollo/client/testing'
import { UpdateEmailByPinDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { userFragmentMock } from '../fragments'

export const updateEmailByPin = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: UpdateEmailByPinDocument,
    variables: {
      emailPin: mockVariables.pin
    }
  },
  result: {
    data: {
      updateEmailByPin: {
        ...userFragmentMock
      }
    }
  },
  error
})
