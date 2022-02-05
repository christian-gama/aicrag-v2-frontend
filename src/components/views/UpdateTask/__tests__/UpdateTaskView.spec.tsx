import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UpdateTaskView } from '..'

const mockFunction = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockFunction
}))

describe('UpdateTaskView', () => {
  const accessTokenStorage = makeAccessTokenStorage()
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    accessTokenStorage.reset()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    accessTokenStorage.set(mockVariables.token)
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<UpdateTaskView />)
    const updateTaskView = screen.getByTestId('update-task-view')

    expect(updateTaskView).toBeInTheDocument()
  })

  it('should navigate back to invoice page when clicking on backIcon', () => {
    renderWithProviders(<UpdateTaskView />)
    const backIcon = screen.getByTestId('back-icon')

    userEvent.click(backIcon)

    expect(mockFunction).toHaveBeenCalled()
  })
})
