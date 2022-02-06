import { MockedResponse } from '@apollo/client/testing'
import {
  GetAllInvoicesDocument,
  GetAllInvoicesType
} from '@/external/graphql/generated'

export const getAllInvoicesMock = (
  error?: Error
): MockedResponse<Record<string, any>> => ({
  request: {
    query: GetAllInvoicesDocument,
    variables: { type: GetAllInvoicesType.Both }
  },
  result: {
    data: {
      getAllInvoices: {
        count: 1,
        displaying: 1,
        page: 1,
        documents: [
          {
            date: {
              month: 0,
              year: 2022
            },
            tasks: 1,
            totalUsd: 10
          }
        ]
      }
    }
  },
  error
})
