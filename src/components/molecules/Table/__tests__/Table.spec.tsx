import { render, screen } from '@testing-library/react'
import { ComponentPropsWithRef } from 'react'
import { setupTests } from '@/tests/helpers'
import { DateData } from '../DateData'
import { Table } from '../Table'
import { Tbody } from '../Tbody'
import { Td } from '../Td'
import { Th } from '../Th'
import { Thead } from '../Thead'
import { Tr } from '../Tr'

const renderTable = (props?: ComponentPropsWithRef<typeof Table>) => {
  return render(
    <div>
      <Table {...props}>
        <Thead>
          <Tr>
            <Th>Header 1</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>Cell 1</Td>
          </Tr>
          <Tr>
            <DateData primaryDate="12" secondaryDate="2020">
              Cell 1
            </DateData>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}

describe('Table', () => {
  setupTests()

  it('renders correctly', () => {
    renderTable({
      pagination: <div data-testid="pagination" />,
      showingUp: { current: 1, total: 1 }
    })
    const table = screen.getByTestId('table')
    const thead = screen.getByTestId('table-thead')
    const tbody = screen.getByTestId('table-tbody')
    const trs = screen.getAllByTestId('table-tr')
    const th = screen.getByTestId('table-th')
    const tds = screen.getAllByTestId('table-td')
    const pagination = screen.getByTestId('pagination')

    expect(table).toBeInTheDocument()
    expect(thead).toBeInTheDocument()
    expect(tbody).toBeInTheDocument()
    expect(trs[0]).toBeInTheDocument()
    expect(trs[1]).toBeInTheDocument()
    expect(th).toBeInTheDocument()
    expect(tds[0]).toBeInTheDocument()
    expect(tds[1]).toBeInTheDocument()
    expect(pagination).toBeInTheDocument()
  })

  it('does not render pagination', () => {
    renderTable()
    const pagination = screen.queryByTestId('pagination')

    expect(pagination).not.toBeInTheDocument()
  })
})
