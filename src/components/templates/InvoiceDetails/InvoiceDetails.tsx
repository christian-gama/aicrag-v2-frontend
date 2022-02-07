import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFormattedMonth } from '@/helpers/getFormattedMonth'
import { useGetTaskValue } from '@/components/_hooks'
import Table from '@/components/molecules/Table'
import { DateData } from '@/components/molecules/Table/DateData'
import { Link } from '@/components/utils/texts/Link'
import {
  GetInvoiceByMonthQuery,
  GetInvoiceByMonthType,
  useGetInvoiceByMonthQuery
} from '@/external/graphql/generated'
import { useRefetchInvoice } from '@/external/graphql/reactiveVars'

export const InvoiceDetails: React.FC = () => {
  const { month, year } = useParams()
  const [invoice, setInvoice] = useState<GetInvoiceByMonthQuery | undefined>()
  const { currency, getTaskValue } = useGetTaskValue(0)
  const { refetch } = useGetInvoiceByMonthQuery({
    variables: {
      type: GetInvoiceByMonthType.Both,
      month: month!,
      year: year!
    },
    onCompleted: (data) => {
      setInvoice(data)
    }
  })

  const { data } = useRefetchInvoice('allInvoices', refetch)

  useEffect(() => {
    setInvoice(data)
  }, [data])

  if (!invoice) return null

  const {
    getInvoiceByMonth: { count, displaying, documents }
  } = invoice

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
                <Link to={`/invoice/task/${invoice.id.toString() as string}`}>
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
