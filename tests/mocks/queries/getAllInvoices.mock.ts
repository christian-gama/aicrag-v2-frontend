import { MockedResponse } from '@apollo/client/testing'
import {
  GetAllInvoicesDocument,
  GetAllInvoicesType
} from '@/external/graphql/generated'
import { arrayFrom } from '@/tests/helpers'

export const getAllInvoicesMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: GetAllInvoicesDocument,
    variables: {
      sort: '-date.year,-date.month,-totalUsd',
      type: GetAllInvoicesType.Both,
      limit: '12',
      page: '1'
    }
  },
  result: {
    data: {
      getAllInvoices: {
        count: 12,
        displaying: 6,
        page: '1 of 2',
        documents: arrayFrom(12).map(() => ({
          date: {
            month: 0,
            year: 2022
          },
          tasks: 1,
          totalUsd: 10
        }))
      }
    }
  },
  error
})
