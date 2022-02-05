import { cleanup, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { popoverVar } from '@/external/graphql/reactiveVars'
import {
  MockDate,
  OverlayRoot,
  renderWithProviders,
  waitFetch
} from '@/tests/helpers'
import { makeMockValidation, mockVariables } from '@/tests/mocks'
import { taskFragmentMock } from '@/tests/mocks/fragments'
import {
  createTaskMock,
  deleteTaskMock,
  findOneTaskMock,
  updateTaskMock
} from '@/tests/mocks/queries'

const mockFunction = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockVariables.id
  }),
  useNavigate: () => mockFunction
}))

describe('Task', () => {
  const accessTokenStorage = makeAccessTokenStorage()
  const mockDate = new MockDate(2022, 1, 1, 0, 0)
  const overlayRoot = new OverlayRoot()
  let UpdateTask: any
  let NewTask: any
  let Task: any

  const getElement = (selector: string) =>
    screen.getByTestId('new-task').querySelector(selector) as HTMLElement

  const commentary = () => getElement('textarea[name="commentary"]')
  const duration = () => getElement('input[name="duration"]')
  const status = () => getElement('select[name="status"]')
  const taskId = () => getElement('input[name="taskId"]')
  const type = () => getElement('select[name="type"]')

  afterEach(() => {
    overlayRoot.removeOverlayRoot()
    accessTokenStorage.reset()
    mockDate.reset()
    cleanup()
  })

  beforeEach(async () => {
    accessTokenStorage.set(mockVariables.token)
    overlayRoot.addOverlayRoot()
    mockDate.mock()

    // Imports dinamically so it can have the date mocked, as it's using DefaultProps
    UpdateTask = (await import('../UpdateTask')).UpdateTask
    NewTask = (await import('../NewTask')).NewTask
    Task = (await import('../Task')).Task
  })

  it('renders correctly', () => {
    renderWithProviders(
      <Task
        validator={makeMockValidation(jest.fn())}
        submitHandler={async () => jest.fn}
        renderButtons={jest.fn()}
      />
    )
    const newTask = screen.getByTestId('new-task')

    expect(newTask).toBeInTheDocument()
  })

  it('changes the duration to 2.4 minutes when change type to QA', () => {
    renderWithProviders(
      <Task
        validator={makeMockValidation(jest.fn())}
        submitHandler={async () => jest.fn}
        renderButtons={jest.fn()}
      />
    )

    userEvent.selectOptions(type(), 'QA')

    expect(duration()).toHaveValue(2.4)
  })

  it('changes the duration to 30 minutes when change type to TX', () => {
    renderWithProviders(
      <Task
        validator={makeMockValidation(jest.fn())}
        submitHandler={async () => jest.fn}
        renderButtons={jest.fn()}
      />
    )

    userEvent.selectOptions(type(), 'TX')

    expect(duration()).toHaveValue(30)
  })

  describe('NewTask', () => {
    it('submits the form', async () => {
      const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
      renderWithProviders(<NewTask />, { apolloMocks: [createTaskMock()] })
      const form = screen.getByTestId('form')

      userEvent.type(taskId(), mockVariables.taskId)
      userEvent.type(commentary(), mockVariables.commentary)
      userEvent.selectOptions(type(), mockVariables.type)
      userEvent.selectOptions(status(), mockVariables.status)
      fireEvent.submit(form)
      await waitFetch()

      expect(popoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
    })
  })

  describe('UpdateTask', () => {
    it('submits the form', async () => {
      const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
      renderWithProviders(<UpdateTask />, { apolloMocks: [updateTaskMock()] })
      const form = screen.getByTestId('form')

      userEvent.type(taskId(), mockVariables.taskId)
      userEvent.type(commentary(), mockVariables.commentary)
      userEvent.selectOptions(type(), mockVariables.type)
      userEvent.selectOptions(status(), mockVariables.status)
      fireEvent.submit(form)
      await waitFetch()

      expect(popoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
    })

    it('deletes the task', async () => {
      const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
      renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock(), deleteTaskMock()]
      })
      const deleteButton = screen.getByRole('button', { name: /deletar/i })
      const deleteAction = () => screen.getByTestId('alert-action-button')

      userEvent.click(deleteButton)
      userEvent.click(deleteAction())
      await waitFetch()

      expect(popoverSpy).toHaveBeenCalled()
    })

    it('closes the Alert when clicking on cancel', async () => {
      renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock(), deleteTaskMock()]
      })
      const deleteButton = screen.getByRole('button', { name: /deletar/i })
      const cancelAction = () => screen.getByTestId('alert-cancel-button')
      const alert = () => screen.queryByTestId('alert')

      userEvent.click(deleteButton)
      userEvent.click(cancelAction())
      await waitFetch()

      expect(alert()).not.toBeInTheDocument()
    })

    it('navigates to /invoice page on data loading error', async () => {
      renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock(new Error())]
      })
      await waitFetch()

      expect(mockFunction).toHaveBeenCalled()
    })

    it('has value in USD if currency is USD', async () => {
      ;(taskFragmentMock as any).task.user.settings.currency = 'USD'
      window.fetch = jest.fn().mockImplementation(async () => ({
        json: () => ({
          USDBRL: { ask: 5 }
        })
      }))
      renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock()]
      })
      const value = () => screen.getByText(/\$ 32\.5/i)
      await waitFetch()

      expect(value()).toBeInTheDocument()
    })

    it('has value in BRL if currency is BRL', async () => {
      ;(taskFragmentMock as any).task.user.settings.currency = 'BRL'
      window.fetch = jest.fn().mockImplementation(async () => ({
        json: () => ({
          USDBRL: { ask: 5 }
        })
      }))
      renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock()]
      })
      const value = () => screen.getByText(/r\$ 162\.5/i)
      await waitFetch(100)

      expect(value()).toBeInTheDocument()
    })

    it('has a correct value even if getBrlFromUsd throws', async () => {
      ;(taskFragmentMock as any).task.user.settings.currency = 'BRL'
      window.fetch = jest.fn().mockImplementation(async () => ({
        json: () => {
          throw new Error()
        }
      }))
      renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock()]
      })
      const value = () => screen.getByText(/r\$ 162\.5/i)
      await waitFetch()

      expect(value()).toBeInTheDocument()
    })
  })
})
