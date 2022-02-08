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
      sort: '-date.month,-date.day,-logs.createdAt',
      year: 2022,
      month: 1
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
