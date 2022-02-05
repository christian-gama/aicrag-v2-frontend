import { MockedResponse } from '@apollo/client/testing'
import { FindOneTaskDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { taskFragmentMock } from '../fragments'

export const findOneTaskMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: FindOneTaskDocument,
    variables: {
      id: mockVariables.id
    }
  },
  result: {
    data: {
      findOneTask: {
        ...taskFragmentMock
      }
    }
  },
  error
})
