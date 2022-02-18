import { MockedResponse } from '@apollo/client/testing'
import { GetInvoiceByMonthDocument } from '@/external/graphql/generated'
import { arrayFrom } from '@/tests/helpers'
import { taskFragmentMock } from '../fragments'

export const getInvoiceByMonthMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: GetInvoiceByMonthDocument,
    variables: {
      type: 'both',
      duration: 30,
      operator: 'lte',
      period: undefined,
      taskId: '',
      sort: '-date.day,-logs.createdAt',
      month: 1,
      year: 2022,
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
