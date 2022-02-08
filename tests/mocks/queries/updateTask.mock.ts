import { MockedResponse } from '@apollo/client/testing'
import { UpdateTaskDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { taskFragmentMock } from '../fragments'

export const updateTaskMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: UpdateTaskDocument,
    variables: {
      commentary: mockVariables.commentary,
      duration: mockVariables.duration,
      status: mockVariables.status,
      taskId: mockVariables.taskId,
      date: mockVariables.date,
      type: mockVariables.type,
      id: mockVariables.id
    }
  },
  result: {
    data: {
      updateTask: {
        ...taskFragmentMock
      }
    }
  },
  error
})
