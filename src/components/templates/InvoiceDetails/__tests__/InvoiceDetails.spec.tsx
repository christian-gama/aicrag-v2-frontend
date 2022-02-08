import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { popoverVar } from '@/external/graphql/reactiveVars'
import { OverlayRoot, renderWithProviders, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { taskFragmentMock } from '@/tests/mocks/fragments'
import { deleteTaskMock, getInvoiceByMonthMock } from '@/tests/mocks/queries'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import jwtDecode from 'jwt-decode'
import { InvoiceDetails } from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    month: 1,
    year: 2022
  })
}))

jest.mock('jwt-decode')
const jwtDecodeMock = jwtDecode as jest.Mock

describe('InvoiceDetails', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', async () => {
    renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock()]
    })
    await waitFetch()
    const invoiceDetails = screen.getByTestId('invoice-details')

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('renders null if does not receive data', async () => {
    renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock(new Error())]
    })
    await waitFetch()
    const invoiceDetails = screen.queryByTestId('invoice-details')

    expect(invoiceDetails).not.toBeInTheDocument()
  })

  it('renders the correct value if currency is equal to USD', async () => {
    makeAccessTokenStorage().set(mockVariables.token)
    jwtDecodeMock.mockReturnValue({ currency: 'USD' })
    renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock()]
    })
    await waitFetch()
    const invoiceDetails = screen.getByText(/^\$ 32.5$/)

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('renders the correct value if currency is equal to BRL', async () => {
    makeAccessTokenStorage().set(mockVariables.token)
    jwtDecodeMock.mockReturnValue({ currency: 'BRL' })
    renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock()]
    })
    await waitFetch()
    const invoiceDetails = screen.getByText(/^R\$ 162.5$/)

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('renders task id with -- if there is no task id', async () => {
    renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [
        {
          ...getInvoiceByMonthMock(),
          result: {
            data: {
              getInvoiceByMonth: {
                count: 1,
                displaying: 1,
                page: 1,
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
    await waitFetch()
    const invoiceDetails = screen.getByText(/^--$/)

    expect(invoiceDetails).toBeInTheDocument()
  })

  it('deletes the task', async () => {
    const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
    renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [
        getInvoiceByMonthMock(),
        deleteTaskMock({ id: mockVariables.uuid })
      ]
    })
    await waitFetch()
    const deleteButton = screen.getByTestId('trash-icon')
    const deleteAction = () => screen.getByTestId('alert-action-button')

    userEvent.click(deleteButton)
    userEvent.click(deleteAction())
    await waitFetch()

    expect(popoverSpy).toHaveBeenCalled()
  })

  it('closes the Alert when clicking on cancel', async () => {
    renderWithProviders(<InvoiceDetails />, {
      apolloMocks: [getInvoiceByMonthMock(), deleteTaskMock()]
    })
    await waitFetch()
    const deleteButton = screen.getByTestId('trash-icon')
    const cancelAction = () => screen.getByTestId('alert-cancel-button')
    const alert = () => screen.queryByTestId('alert')

    userEvent.click(deleteButton)
    userEvent.click(cancelAction())
    await waitFetch()

    expect(alert()).not.toBeInTheDocument()
  })
})
