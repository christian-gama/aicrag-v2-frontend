import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import DateData from '../DateData'
import TableProps from '../protocols/Table.model'
import Table from '../Table'
import Tbody from '../Tbody'
import Td from '../Td'
import Th from '../Th'
import Thead from '../Thead'
import Tr from '../Tr'

const makeSut = (props: TableProps) => {
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

  it('should render Table correctly', () => {
    makeSut({})

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

  it('should have the correct showing message if it is defined', () => {
    makeSut({ showingUp: { current: 1, total: 10 } })

    const showingUp = screen.getByTestId('table-showing-up')

    expect(showingUp).toBeInTheDocument()
    expect(showingUp.textContent).toBe('Mostrando 1 de 10')
  })
})
