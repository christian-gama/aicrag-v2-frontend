import { MockedResponse } from '@apollo/client/testing'
import { SendEmailPinDocument } from '@/external/graphql/generated'
import { mockVariables } from '..'
import { sendEmailFragment } from '../fragments'

export const sendEmailPinMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: SendEmailPinDocument,
    variables: {
      email: mockVariables.email
    }
  },
  result: {
    data: {
      sendEmailPin: { ...sendEmailFragment }
    }
  },
  error
})
