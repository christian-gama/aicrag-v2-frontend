import { SendWelcomeEmailDocument } from '@/external/graphql/generated'
import { MockedResponse } from '@apollo/client/testing'
import { mockVariables } from '..'

export const sendWelcomeEmailMock = (
  input?: {
    email?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: SendWelcomeEmailDocument,
    variables: {
      email: input?.email ?? mockVariables.email
    }
  },
  result: {
    data: {
      sendWelcomeEmail: { message: 'Any message' }
    }
  },
  error
})
