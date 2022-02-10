import { authVar, popoverVar } from '@/external/graphql/reactiveVars'
import {
  renderWithProviders,
  setupTests,
  setUser,
  waitFetch
} from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { taskFragmentMock } from '@/tests/mocks/fragments'
import { deleteTaskMock, getInvoiceByMonthMock } from '@/tests/mocks/queries'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InvoiceDetails } from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    month: 1,
    year: 2022
  })
}))

describe('InvoiceDetails', () => {
  setupTests()

  afterEach(() => {
    authVar.logout()
  })

  beforeEach(() => {
    setUser({ currency: 'BRL' })
  })

  it('renders correctly', async () => {
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock()]
    })
    const invoiceDetails = screen.getByTestId('invoice-details')

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('renders null if does not receive data', async () => {
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock(new Error())]
    })
    const invoiceDetails = screen.queryByTestId('invoice-details')

    expect(invoiceDetails).not.toBeInTheDocument()
  })

  it('renders the correct value if currency is equal to USD', async () => {
    setUser({ currency: 'USD' })
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock()]
    })
    const invoiceDetails = screen.getAllByText(/^\$ 32.5$/)[0]

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('renders the correct value if currency is equal to BRL', async () => {
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock()]
    })
    const invoiceDetails = screen.getAllByText(/^R\$ 162.5$/)[0]

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('renders task id with -- if there is no task id', async () => {
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [
        {
          ...getInvoiceByMonthMock(),
          result: {
            data: {
              getInvoiceByMonth: {
                count: 1,
                displaying: 1,
                page: '1 of 1',
                documents: [
                  {
                    ...taskFragmentMock.task,
                    taskId: ''
                  }
                ]
              }
            }
          }
        }
      ]
    })
    const invoiceDetails = screen.getAllByText(/^--$/)[0]

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('deletes the task', async () => {
    const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [
        getInvoiceByMonthMock(),
        deleteTaskMock({ id: mockVariables.uuid })
      ]
    })
    const deleteButton = screen.getAllByTestId('trash-icon')[0]
    const deleteAction = () => screen.getByTestId('alert-action-button')

    userEvent.click(deleteButton)
    userEvent.click(deleteAction())
    await waitFetch()

    expect(popoverSpy).toHaveBeenCalled()
  })

  it('closes the Alert when clicking on cancel', async () => {
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock(), deleteTaskMock()]
    })
    const deleteButton = screen.getAllByTestId('trash-icon')[0]
    const cancelAction = () => screen.getByTestId('alert-cancel-button')
    const alert = () => screen.queryByTestId('alert')

    userEvent.click(deleteButton)
    userEvent.click(cancelAction())
    await waitFetch()

    expect(alert()).not.toBeInTheDocument()
  })

  it('changes to the next page when click on nextPage', async () => {
    await renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock()]
    })
    const nextPage = screen.getByTestId('pagination-action-next')

    userEvent.click(nextPage)
    await waitFetch()

    expect(nextPage).not.toBeInTheDocument()
  })
})
