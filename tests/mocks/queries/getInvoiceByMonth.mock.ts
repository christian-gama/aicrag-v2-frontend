import { MockedResponse } from '@apollo/client/testing'
import {
  GetInvoiceByMonthDocument,
  GetInvoiceByMonthType
} from '@/external/graphql/generated'
import { taskFragmentMock } from '../fragments'

export const getInvoiceByMonthMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: GetInvoiceByMonthDocument,
    variables: {
      type: GetInvoiceByMonthType.Both,
      month: 1,
      year: 2022
    }
  },
  result: {
    data: {
      getInvoiceByMonth: {
        count: 1,
        displaying: 1,
        page: 1,
        documents: [
          {
            ...taskFragmentMock.task
          }
        ]
      }
    }
  },
  error
})
