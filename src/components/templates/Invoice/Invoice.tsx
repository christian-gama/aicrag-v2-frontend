import { useEffect } from 'react'
import { getPages } from '@/helpers'
import { getFormattedMonth } from '@/helpers/getFormattedMonth'
import { useGetTaskValue, usePagination } from '@/components/_hooks'
import { LoadingSkeleton } from '@/components/atoms/LoadingSkeleton'
import { Pagination } from '@/components/atoms/Pagination'
import { NoContent } from '@/components/molecules/NoContent'
import Table from '@/components/molecules/Table'
import { DateData } from '@/components/molecules/Table/DateData'
import { Link } from '@/components/utils/texts/Link'
import {
  GetAllInvoicesType,
  useGetAllInvoicesQuery
} from '@/external/graphql/generated'
import { useRefetchInvoice } from '@/external/graphql/reactiveVars'

export const Invoice: React.FC = () => {
  const { currency, getTaskValue } = useGetTaskValue(0)
  const {
    previousPageHandler,
    nextPageHandler,
    setTotalPages,
    currentPage,
    totalPages
  } = usePagination()
  const { data, refetch, loading } = useGetAllInvoicesQuery({
    variables: {
      sort: '-date.year,-date.month,-logs.createdAt',
      type: GetAllInvoicesType.Both,
      page: currentPage.toString(),
      limit: '12'
    }
  })
  useRefetchInvoice('allInvoices', refetch)

  useEffect(() => {
    if (data) {
      setTotalPages(getPages(data.getAllInvoices.page).totalPages)
    }
  }, [data])

  if (loading) {
    return (
      <LoadingSkeleton
        marginTop="5rem"
        gap="2.4rem"
        columns={4}
        width="70%"
        amount={7}
      />
    )
  }

  if (!data || data.getAllInvoices.count === 0) {
    return <NoContent />
  }

  const {
    getAllInvoices: { count, displaying, documents }
  } = data

  return (
    <div data-testid="invoice">
      <Table.Main
        showingUp={{ current: displaying, total: count }}
        pagination={
          <Pagination
            previousPageHandler={previousPageHandler}
            nextPageHandler={nextPageHandler}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        }
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Período</Table.Th>
            <Table.Th>Quantidade</Table.Th>
            <Table.Th>Valor</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {documents.map((invoice, index) => (
            <Table.Tr key={index}>
              <DateData
                primaryDate={getFormattedMonth(invoice.date.month)}
                secondaryDate={invoice.date.year.toString()}
              />

              <Table.Td>{invoice.tasks}</Table.Td>

              <Table.Td>{`${currency === 'BRL' ? 'R$' : '$'} ${getTaskValue(
                invoice.totalUsd
              )}`}</Table.Td>

              <Table.Td justifyContent="flex-end">
                <Link
                  to={`/invoice/${invoice.date.year.toString()}/${invoice.date.month.toString()}`}
                >
                  Detalhes
                </Link>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table.Main>
    </div>
  )
}
