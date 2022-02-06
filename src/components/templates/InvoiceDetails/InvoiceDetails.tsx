import { useParams } from 'react-router-dom'
import { getFormattedMonth } from '@/helpers/getFormattedMonth'
import { useGetTaskValue } from '@/components/_hooks'
import Table from '@/components/molecules/Table'
import { DateData } from '@/components/molecules/Table/DateData'
import { Link } from '@/components/utils/texts/Link'
import {
  GetInvoiceByMonthType,
  useGetInvoiceByMonthQuery
} from '@/external/graphql/generated'

export const InvoiceDetails: React.FC = () => {
  const { month, year } = useParams()
  const { currency, getTaskValue } = useGetTaskValue(0)
  const { data } = useGetInvoiceByMonthQuery({
    variables: {
      type: GetInvoiceByMonthType.Both,
      month: month!,
      year: year!
    }
  })

  if (!data) return null

  const {
    getInvoiceByMonth: { count, displaying, documents }
  } = data

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
                primaryDate={getFormattedMonth(invoice.date.day)}
                secondaryDate={invoice.date.month.toString()}
              />

              <Table.Td>{invoice.duration}</Table.Td>

              <Table.Td>{`${currency === 'BRL' ? 'R$' : '$'} ${getTaskValue(
                invoice.usd
              )}`}</Table.Td>

              <Table.Td>{invoice.taskId}</Table.Td>

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
