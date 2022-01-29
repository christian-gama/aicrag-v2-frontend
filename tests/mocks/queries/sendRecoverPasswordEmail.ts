import { MockedResponse } from '@apollo/client/testing'
import { SendRecoverPasswordEmailDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { sendEmailFragment } from '../fragments'

export const sendRecoverPasswordEmailMock = (
  input?: {
    email?: string
  },
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: SendRecoverPasswordEmailDocument,
    variables: {
      email: input?.email ?? mockVariables.email
    }
  },
  result: {
    data: {
      sendRecoverPasswordEmail: { ...sendEmailFragment }
    }
  },
  error
})
