import { MockedResponse } from '@apollo/client/testing'
import { SendWelcomeEmailDocument } from '@/external/graphql/generated'
import variablesMock from '../variables.mock'

const sendWelcomeEmailMock = (
  input?: {
    email?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: SendWelcomeEmailDocument,
    variables: {
      email: input?.email ?? variablesMock.email
    }
  },
  result: {
    data: {
      sendWelcomeEmail: { message: 'Any message' }
    }
  },
  error
})

export default sendWelcomeEmailMock
