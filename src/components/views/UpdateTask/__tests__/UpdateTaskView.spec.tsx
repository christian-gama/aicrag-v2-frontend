import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UpdateTaskView } from '..'

const mockFunction = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockFunction
}))

describe('UpdateTaskView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<UpdateTaskView />)
    const updateTaskView = screen.getByTestId('update-task-view')

    expect(updateTaskView).toBeInTheDocument()
  })

  it('should navigate back to invoice page when clicking on backIcon', async () => {
    await renderWithProviders(<UpdateTaskView />)
    const backIcon = screen.getByTestId('back-icon')

    userEvent.click(backIcon)

    expect(mockFunction).toHaveBeenCalled()
  })
})
