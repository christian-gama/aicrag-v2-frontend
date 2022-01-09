import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Table from '../Table'
import Tbody from '../Tbody'
import Td from '../Td'
import Th from '../Th'
import Thead from '../Thead'
import Tr from '../Tr'

const makeSut = () => {
  return render(
    <Table>
      <Thead>
        <Tr>
          <Th>Header 1</Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td>Cell 1</Td>
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
    makeSut()

    const table = screen.getByTestId('table')
    const thead = screen.getByTestId('table-thead')
    const tbody = screen.getByTestId('table-tbody')
    const trs = screen.getAllByTestId('table-tr')
    const th = screen.getByTestId('table-th')
    const td = screen.getByTestId('table-td')

    expect(table).toBeInTheDocument()
    expect(thead).toBeInTheDocument()
    expect(tbody).toBeInTheDocument()
    expect(trs[0]).toBeInTheDocument()
    expect(trs[1]).toBeInTheDocument()
    expect(th).toBeInTheDocument()
    expect(td).toBeInTheDocument()
  })
})
