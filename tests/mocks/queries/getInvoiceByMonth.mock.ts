import { MockedResponse } from '@apollo/client/testing'
import {
  GetInvoiceByMonthDocument,
  GetInvoiceByMonthType
} from '@/external/graphql/generated'
import { arrayFrom } from '@/tests/helpers'
import { taskFragmentMock } from '../fragments'

export const getInvoiceByMonthMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: GetInvoiceByMonthDocument,
    variables: {
      sort: '-date.month,-date.day,-logs.createdAt',
      type: GetInvoiceByMonthType.Both,
      year: 2022,
      month: 1,
      page: '1'
    }
  },
  result: {
    data: {
      getInvoiceByMonth: {
        count: 40,
        displaying: 20,
        page: '1 of 2',
        documents: arrayFrom(40).map(() => taskFragmentMock.task)
      }
    }
  },
  error
})
