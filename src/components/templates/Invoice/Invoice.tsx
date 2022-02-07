import { useEffect, useState } from 'react'
import { getFormattedMonth } from '@/helpers/getFormattedMonth'
import { useGetTaskValue } from '@/components/_hooks'
import Table from '@/components/molecules/Table'
import { DateData } from '@/components/molecules/Table/DateData'
import { Link } from '@/components/utils/texts/Link'
import {
  GetAllInvoicesQuery,
  GetAllInvoicesType,
  useGetAllInvoicesQuery
} from '@/external/graphql/generated'
import { useRefetchInvoice } from '@/external/graphql/reactiveVars'

export const Invoice: React.FC = () => {
  const { currency, getTaskValue } = useGetTaskValue(0)
  const [allInvoices, setAllInvoices] = useState<
  GetAllInvoicesQuery | undefined
  >()
  const { refetch } = useGetAllInvoicesQuery({
    variables: { type: GetAllInvoicesType.Both },
    onCompleted: (data) => {
      setAllInvoices(data)
    }
  })
  const { data } = useRefetchInvoice('invoice', refetch)

  useEffect(() => {
    setAllInvoices(data)
  }, [data])

  if (!allInvoices) return null

  const {
    getAllInvoices: { count, displaying, documents }
  } = allInvoices

  return (
    <div data-testid="invoice">
      <Table.Main showingUp={{ current: displaying, total: count }}>
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
