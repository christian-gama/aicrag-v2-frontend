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
import { createTaskMock } from '@/tests/mocks/queries'

describe('Task', () => {
  let Task: any
  let NewTask: any
  const accessTokenStorage = makeAccessTokenStorage()
  const mockDate = new MockDate(2022, 1, 1, 0, 0)
  const overlayRoot = new OverlayRoot()

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
})
