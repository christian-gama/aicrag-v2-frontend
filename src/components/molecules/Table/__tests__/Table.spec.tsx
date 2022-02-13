import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentPropsWithRef } from 'react'
import { ControlInput } from '@/components/organisms/Control'
import { formUtils, renderWithProviders, setupTests } from '@/tests/helpers'
import { DateData } from '../DateData'
import { useTFilter } from '../hooks'
import { Table } from '../Table'
import { Tbody } from '../Tbody'
import { Td } from '../Td'
import { Filter } from '../TFilter'
import { Th } from '../Th'
import { Thead } from '../Thead'
import { Tr } from '../Tr'

const mockFunction = jest.fn()
jest.mock('../../../utils/icons', () => ({
  ChevronIcon: (props: any) => {
    mockFunction(props)

    return null
  }
}))

const MockTable = () => {
  const { sortHandler, printFieldWithArrow } = useTFilter()

  return (
    <table>
      <thead>
        <tr>
          <th
            data-testid="header"
            onClick={() => sortHandler('header', 'header')}
          >
            {printFieldWithArrow('header', 'header')}
          </th>
        </tr>
      </thead>
    </table>
  )
}

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

  describe('TFilter', () => {
    it('resets the form when clicks on "Limpar filtro"', async () => {
      await renderWithProviders(
        <Filter height={{ mobile: '', tablet: '', widescreen: '' }}>
          <ControlInput label="" name="" />
        </Filter>
      )
      const input = screen.getByTestId('base-input')

      userEvent.type(input, 'test')
      await formUtils.submitForm()

      expect(input).toHaveValue('')
    })
  })

  it('opens the filter card', async () => {
    await renderWithProviders(
      <Filter height={{ mobile: '', tablet: '', widescreen: '' }} />
    )
    const filterHeader = screen.getByTestId('filter-header')

    userEvent.click(filterHeader)

    expect(screen.getByTestId('filter')).toBeInTheDocument()
  })

  it('has the correct Chevron based on the asc order', async () => {
    await renderWithProviders(
      <>
        <Filter height={{ mobile: '', tablet: '', widescreen: '' }} />

        <MockTable />
      </>
    )
    const header = screen.getByTestId('header')

    userEvent.click(header)

    expect(mockFunction).toHaveBeenCalledWith({
      direction: 'down',
      size: expect.anything()
    })

    userEvent.click(header)

    expect(mockFunction).toHaveBeenCalledWith({
      direction: 'up',
      size: expect.anything()
    })
  })
})
