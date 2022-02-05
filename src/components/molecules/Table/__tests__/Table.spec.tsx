import { render, cleanup, screen } from '@testing-library/react'
import { ComponentPropsWithRef } from 'react'
import { DateData } from '../DateData'
import { Table } from '../Table'
import { Tbody } from '../Tbody'
import { Td } from '../Td'
import { Th } from '../Th'
import { Thead } from '../Thead'
import { Tr } from '../Tr'

const renderTable = (props?: ComponentPropsWithRef<typeof Table>) => {
  return render(
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
          <Td>
            <DateData primaryDate="12" secondaryDate="2020">
              Cell 1
            </DateData>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

describe('Table', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderTable()
    const table = screen.getByTestId('table')
    const thead = screen.getByTestId('table-thead')
    const tbody = screen.getByTestId('table-tbody')
    const trs = screen.getAllByTestId('table-tr')
    const th = screen.getByTestId('table-th')
    const tds = screen.getAllByTestId('table-td')

    expect(table).toBeInTheDocument()
    expect(thead).toBeInTheDocument()
    expect(tbody).toBeInTheDocument()
    expect(trs[0]).toBeInTheDocument()
    expect(trs[1]).toBeInTheDocument()
    expect(th).toBeInTheDocument()
    expect(tds[0]).toBeInTheDocument()
    expect(tds[1]).toBeInTheDocument()
  })
})
