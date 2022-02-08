import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFormattedMonth } from '@/helpers/getFormattedMonth'
import { useGetTaskValue } from '@/components/_hooks'
import { LoadingSkeleton } from '@/components/atoms/LoadingSkeleton'
import { Alert } from '@/components/molecules/Alert'
import { NoContent } from '@/components/molecules/NoContent'
import Table from '@/components/molecules/Table'
import { DateData } from '@/components/molecules/Table/DateData'
import { PenIcon } from '@/components/utils/icons/PenIcon'
import { TrashIcon } from '@/components/utils/icons/TrashIcon'
import { Link } from '@/components/utils/texts/Link'
import {
  GetInvoiceByMonthType,
  useDeleteTaskMutation,
  useGetInvoiceByMonthQuery
} from '@/external/graphql/generated'
import {
  popoverVar,
  refetchInvoiceVar,
  useRefetchInvoice
} from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const InvoiceDetails: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [deleteTask] = useDeleteTaskMutation()
  const { month, year } = useParams()
  const { currency, getTaskValue } = useGetTaskValue(0)
  const [deleteTaskHandler, setDeleteTaskHandler] =
    useState<() => Promise<void>>()
  const { data, refetch, loading } = useGetInvoiceByMonthQuery({
    variables: {
      type: GetInvoiceByMonthType.Both,
      month: month!,
      year: year!,
      sort: '-date.month,-date.day,-logs.createdAt'
    }
  })

  useRefetchInvoice('invoice', refetch)

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

  if (!data || !data.getInvoiceByMonth.count) return <NoContent />

  const {
    getInvoiceByMonth: { count, displaying, documents }
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
      <Table.Main showingUp={{ current: displaying, total: count }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Data</Table.Th>
            <Table.Th>Duração</Table.Th>
            <Table.Th>Valor</Table.Th>
            <Table.Th>Identificação</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
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
                    {invoice.type}
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
        </Table.Tbody>
      </Table.Main>

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
