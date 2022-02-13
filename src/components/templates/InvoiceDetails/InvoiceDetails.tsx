import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPages } from '@/helpers'
import { getFormattedMonth } from '@/helpers/getFormattedMonth'
import { useGetTaskValue, usePagination } from '@/components/_hooks'
import { LoadingSkeleton } from '@/components/atoms/LoadingSkeleton'
import { Pagination } from '@/components/atoms/Pagination'
import { Alert } from '@/components/molecules/Alert'
import { NoContent } from '@/components/molecules/NoContent'
import Table from '@/components/molecules/Table'
import { DateData } from '@/components/molecules/Table/DateData'
import { useTFilter } from '@/components/molecules/Table/hooks'
import { PenIcon } from '@/components/utils/icons/PenIcon'
import { TrashIcon } from '@/components/utils/icons/TrashIcon'
import { Link } from '@/components/utils/texts/Link'
import {
  GetInvoiceByMonthOperator,
  GetInvoiceByMonthPeriod,
  GetInvoiceByMonthType,
  useDeleteTaskMutation,
  useGetInvoiceByMonthLazyQuery
} from '@/external/graphql/generated'
import { popoverVar, refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const InvoiceDetails: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [deleteTask] = useDeleteTaskMutation()
  const { month, year } = useParams()
  const { currency, getTaskValue } = useGetTaskValue(0)
  const [deleteTaskHandler, setDeleteTaskHandler] =
    useState<() => Promise<void>>()
  const {
    previousPageHandler,
    nextPageHandler,
    setTotalPages,
    currentPage,
    totalPages
  } = usePagination()

  const [getInvoiceByMonth, { data, loading }] = useGetInvoiceByMonthLazyQuery()

  const { filters, sortHandler, printFieldWithArrow } = useTFilter<{
    type: GetInvoiceByMonthType
    sort: string
    duration: string
    operator: GetInvoiceByMonthOperator
    period: GetInvoiceByMonthPeriod
    taskId: string
  }>()

  useEffect(() => {
    getInvoiceByMonth({
      variables: {
        type: filters?.type ?? GetInvoiceByMonthType.Both,
        duration: filters?.duration ? +filters?.duration : undefined,
        operator: filters?.operator,
        period: filters?.period ? filters.period : undefined,
        taskId: filters?.taskId,
        sort: filters?.sort ?? '-date.day,-logs.createdAt',
        month: month!,
        year: year!
      }
    }).catch(() => {})
  }, [filters])

  useEffect(() => {
    if (data) {
      setTotalPages(getPages(data.getInvoiceByMonth.page).totalPages)
    }
  }, [data])

  const renderTable = (children: React.ReactNode) => {
    return (
      <>
        <Table.Main
          showingUp={
            data?.getInvoiceByMonth.count
              ? {
                  current: data.getInvoiceByMonth.displaying,
                  total: data.getInvoiceByMonth.count
                }
              : undefined
          }
          pagination={
            data?.getInvoiceByMonth.count
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
                onClick={() => sortHandler('date', 'date.day,-logs.createdAt')}
              >
                {printFieldWithArrow('Data', 'date')}
              </Table.Th>

              <Table.Th
                onClick={() => sortHandler('duration', 'duration,-date.day')}
              >
                {printFieldWithArrow('Duração', 'duration')}
              </Table.Th>
              <Table.Th onClick={() => sortHandler('usd', 'usd,-date.day')}>
                {printFieldWithArrow('Valor', 'usd')}
              </Table.Th>
              <Table.Th>Identificação</Table.Th>
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

  if (!data.getInvoiceByMonth.count) {
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
    getInvoiceByMonth: { documents }
  } = data

  const onDeleteTaskHandler = async (id: string) => {
    await deleteTask({
      variables: {
        id
      }
    })

    setIsAlertOpen(false)
    refetchInvoiceVar.refetch()
    popoverVar.setPopover('Tarefa deletada com sucesso', 'success')
  }

  return (
    <div data-testid="invoice-details">
      {renderTable(
        <>
          {documents.map((invoice, index) => (
            <Table.Tr key={index}>
              <DateData
                primaryDate={invoice.date.day.toString()}
                secondaryDate={getFormattedMonth(invoice.date.month)}
              />

              <Table.Td>{`${invoice.duration} min`}</Table.Td>

              <Table.Td>{`${currency === 'BRL' ? 'R$' : '$'} ${getTaskValue(
                invoice.usd
              )}`}</Table.Td>

              <Table.Td>{invoice.taskId || '--'}</Table.Td>

              <Table.Td justifyContent="flex-end">
                <div className={classes.invoiceDetailsActionCell}>
                  <div
                    className={classes.invoiceDetailsType({
                      type: invoice.type as 'TX' | 'QA'
                    })}
                  >
                    <span>{invoice.type}</span>

                    <span className={classes.invoiceDetailsTypeModal}>
                      {invoice.type === 'TX' ? 'Transcrição' : 'Correção'}
                    </span>
                  </div>

                  <Link to={`/invoice/task/${invoice.id.toString() as string}`}>
                    <PenIcon />
                  </Link>

                  <div
                    onClick={() => {
                      setDeleteTaskHandler(() =>
                        onDeleteTaskHandler.bind(null, invoice.id)
                      )

                      setIsAlertOpen(true)
                    }}
                    className={classes.invoiceDetailsTrash}
                  >
                    <TrashIcon />
                  </div>
                </div>
              </Table.Td>
            </Table.Tr>
          ))}
        </>
      )}

      <Alert
        message="Você está prestes a deletar uma tarefa e essa ação é irreversível. Você tem certeza de que quer continuar?"
        onCancel={() => setIsAlertOpen(false)}
        title="Uma confirmação é necessária"
        onAction={deleteTaskHandler!}
        mode="actionAndCancel"
        actionName="Deletar"
        isOpen={isAlertOpen}
        type="danger"
      />
    </div>
  )
}
