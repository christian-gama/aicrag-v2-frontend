import { MockedResponse } from '@apollo/client/testing'
import { SendRecoverPasswordEmailDocument } from '@/external/graphql/generated'
import sendEmailFragment from '../fragments/sendEmailFragment'
import variablesMock from '../variables.mock'

const sendRecoverPasswordEmailMock = (
  input?: {
    email?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: SendRecoverPasswordEmailDocument,
    variables: {
      email: input?.email ?? variablesMock.email
    }
  },
  result: {
    data: {
      sendRecoverPasswordEmail: { ...sendEmailFragment }
    }
  },
  error
})

export default sendRecoverPasswordEmailMock
