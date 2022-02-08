import { MockedResponse } from '@apollo/client/testing'
import { DeleteTaskDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'

export const deleteTaskMock = (
  input?: {
    id: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: DeleteTaskDocument,
    variables: {
      id: mockVariables.uuid
    }
  },
  result: {
    data: {
      deleteTask: {
        message: mockVariables.message
      }
    }
  },
  error
})
