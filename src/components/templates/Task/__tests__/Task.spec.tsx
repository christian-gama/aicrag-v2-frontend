import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { makeTaskTypeStorage } from '@/external/factories/storage/task'
import { popoverVar } from '@/external/graphql/reactiveVars'
import {
  formUtils,
  MockDate,
  renderWithProviders,
  setupTests,
  setUser,
  waitFetch
} from '@/tests/helpers'
import { makeMockValidation, mockVariables } from '@/tests/mocks'
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
  setupTests()
  const taskTypeStorage = makeTaskTypeStorage()
  const mockDate = new MockDate(2022, 1, 1, 0, 0)
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
    taskTypeStorage.reset()
    mockDate.reset()
  })

  beforeEach(async () => {
    setUser()
    mockDate.mock()

    // Imports dinamically so it can have the date mocked, as it's using DefaultProps
    UpdateTask = (await import('../UpdateTask')).UpdateTask
    NewTask = (await import('../NewTask')).NewTask
    Task = (await import('../Task')).Task
  })

  it('renders correctly', async () => {
    await renderWithProviders(
      <Task
        validator={makeMockValidation(jest.fn())}
        submitHandler={async () => jest.fn}
        renderButtons={jest.fn()}
      />
    )
    const newTask = screen.getByTestId('new-task')

    expect(newTask).toBeInTheDocument()
  })

  it('changes the duration to 2.4 minutes when change type to QA', async () => {
    await renderWithProviders(
      <Task
        validator={makeMockValidation(jest.fn())}
        submitHandler={async () => jest.fn}
        renderButtons={jest.fn()}
      />
    )

    userEvent.selectOptions(type(), 'QA')

    expect(duration()).toHaveValue(2.4)
  })

  it('changes the duration to 30 minutes when change type to TX', async () => {
    await renderWithProviders(
      <Task
        validator={makeMockValidation(jest.fn())}
        submitHandler={async () => jest.fn}
        renderButtons={jest.fn()}
      />
    )

    userEvent.selectOptions(type(), 'TX')

    expect(duration()).toHaveValue(30)
  })

  it('starts with the type saved on the taskTypeStorage', async () => {
    taskTypeStorage.set('QA')
    await renderWithProviders(
      <Task
        validator={makeMockValidation(jest.fn())}
        renderButtons={jest.fn()}
        submitHandler={jest.fn()}
      />
    )

    expect(type()).toHaveValue('QA')
  })

  describe('NewTask', () => {
    it('submits the form', async () => {
      const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
      await renderWithProviders(<NewTask />, {
        apolloMocks: [createTaskMock()]
      })

      userEvent.type(taskId(), mockVariables.taskId)
      userEvent.type(commentary(), mockVariables.commentary)
      userEvent.selectOptions(type(), mockVariables.type)
      userEvent.selectOptions(status(), mockVariables.status)
      await formUtils.submitForm()

      expect(popoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
    })
  })

  describe('UpdateTask', () => {
    it('submits the form', async () => {
      const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
      await renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock(), updateTaskMock()]
      })

      fireEvent.change(taskId(), mockVariables.taskId)
      fireEvent.change(commentary(), mockVariables.commentary)
      userEvent.selectOptions(type(), mockVariables.type)
      userEvent.selectOptions(status(), mockVariables.status)
      await formUtils.submitForm()

      expect(popoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
    })

    it('deletes the task', async () => {
      const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
      await renderWithProviders(<UpdateTask />, {
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
      await renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock(), deleteTaskMock()]
      })
      await waitFetch()
      const deleteButton = screen.getByRole('button', { name: /deletar/i })
      const cancelAction = () => screen.getByTestId('alert-cancel-button')
      const alert = () => screen.queryByTestId('alert')

      userEvent.click(deleteButton)
      userEvent.click(cancelAction())
      await waitFetch()

      expect(alert()).not.toBeInTheDocument()
    })

    it('navigates to /invoice page on data loading error', async () => {
      await renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock(new Error())]
      })
      await waitFetch()

      expect(mockFunction).toHaveBeenCalled()
    })

    it('has value in USD if currency is USD', async () => {
      setUser({ currency: 'USD' })
      window.fetch = jest.fn().mockImplementation(async () => ({
        json: () => ({
          USDBRL: { ask: 5 }
        })
      }))
      await renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock()]
      })
      const value = () => screen.getByText(/\$ 32\.5/i)

      expect(value()).toBeInTheDocument()
    })

    it('has value in BRL if currency is BRL', async () => {
      window.fetch = jest.fn().mockImplementation(async () => ({
        json: () => ({
          USDBRL: { ask: 5 }
        })
      }))
      await renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock()]
      })
      const value = () => screen.getByText(/r\$ 162\.5/i)

      expect(value()).toBeInTheDocument()
    })

    it('has a correct value even if getBrlFromUsd throws', async () => {
      window.fetch = jest.fn().mockImplementation(async () => ({
        json: () => {
          throw new Error()
        }
      }))
      await renderWithProviders(<UpdateTask />, {
        apolloMocks: [findOneTaskMock()]
      })
      const value = () => screen.getByText(/r\$ 162\.5/i)

      expect(value()).toBeInTheDocument()
    })
  })
})
