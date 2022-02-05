import { MockedResponse } from '@apollo/client/testing'
import { CreateTaskDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { taskFragmentMock } from '../fragments'

export const createTaskMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: CreateTaskDocument,
    variables: {
      commentary: mockVariables.commentary,
      duration: mockVariables.duration,
      status: mockVariables.status,
      taskId: mockVariables.taskId,
      date: mockVariables.date,
      type: mockVariables.type
    }
  },
  result: {
    data: {
      createTask: {
        ...taskFragmentMock
      }
    }
  },
  error
})
