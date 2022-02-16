import { useEffect } from 'react'
import { getPages } from '@/helpers'
import { getFormattedMonth } from '@/helpers/getFormattedMonth'
import { useGetTaskValue, usePagination } from '@/components/_hooks'
import { LoadingSkeleton } from '@/components/atoms/LoadingSkeleton'
import { Pagination } from '@/components/atoms/Pagination'
import { NoContent } from '@/components/molecules/NoContent'
import Table from '@/components/molecules/Table'
import { DateData } from '@/components/molecules/Table/DateData'
import { useTFilter } from '@/components/molecules/Table/hooks'
import { Link } from '@/components/utils/texts/Link'
import {
  GetAllInvoicesType,
  useGetAllInvoicesLazyQuery
} from '@/external/graphql/generated'
import { refetchInvoiceVar } from '@/external/graphql/reactiveVars'

export const Invoice: React.FC = () => {
  const { currency, getTaskValue } = useGetTaskValue(0)
  const {
    previousPageHandler,
    nextPageHandler,
    setTotalPages,
    currentPage,
    totalPages
  } = usePagination()
  const [getAllInvoices, { data, loading }] = useGetAllInvoicesLazyQuery()

  const { filters, printFieldWithArrow, sortHandler, setSortByAsc } =
    useTFilter<{
      type: GetAllInvoicesType
      sort: string
    }>()

  useEffect(() => {
    setSortByAsc({ date: true })
  }, [])

  useEffect(() => {
    if (filters?.type) {
      const { sort, type } = filters

      getAllInvoices({
        variables: {
          sort: sort ?? '-date.year,-date.month,-totalUsd',
          page: currentPage.toString(),
          type: type,
          limit: '12'
        }
      }).catch(() => {})
    }

    if (refetchInvoiceVar.get().shouldRefetch.allInvoices) {
      refetchInvoiceVar.reset('allInvoices')
    }
  }, [filters, refetchInvoiceVar.get().shouldRefetch.allInvoices])

  useEffect(() => {
    if (data) {
      setTotalPages(getPages(data.getAllInvoices.page).totalPages)
    }
  }, [data])

  const renderTable = (children: React.ReactNode) => {
    return (
      <>
        <Table.Main
          showingUp={
            data?.getAllInvoices.count
              ? {
                  current: data.getAllInvoices.displaying,
                  total: data.getAllInvoices.count
                }
              : undefined
          }
          pagination={
            data?.getAllInvoices.count
              ? (
              <Pagination
                previousPageHandler={previousPageHandler}
                nextPageHandler={nextPageHandler}
                currentPage={currentPage}
                totalPages={totalPages}
              />
                )
              : undefined
          }
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th
                onClick={() =>
                  sortHandler('date', 'date.year,-date.month,-logs.createdAt')
                }
              >
                {printFieldWithArrow('Período', 'date')}
              </Table.Th>
              <Table.Th
                onClick={() =>
                  sortHandler('tasks', 'tasks,date.year,-date.month')
                }
              >
                {printFieldWithArrow('Quantidade', 'tasks')}
              </Table.Th>
              <Table.Th
                onClick={() =>
                  sortHandler('totalUsd', 'totalUsd,-date.year,-date.month')
                }
              >
                {printFieldWithArrow('Valor', 'totalUsd')}
              </Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>{children}</Table.Tbody>
        </Table.Main>
      </>
    )
  }

  if (!data || loading) {
    return renderTable(
      <tr>
        <td style={{ width: '100%', display: 'flex' }}>
          <LoadingSkeleton
            marginTop="5rem"
            gap="2.4rem"
            columns={4}
            width="100%"
            amount={7}
          />
        </td>
      </tr>
    )
  }

  if (!data.getAllInvoices.count) {
    return renderTable(
      <tr
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1.6rem'
        }}
      >
        <td>
          <NoContent />
        </td>
      </tr>
    )
  }

  const {
    getAllInvoices: { documents }
  } = data

  return (
    <div data-testid="invoice">
      {renderTable(
        <>
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
        </>
      )}
    </div>
  )
}
