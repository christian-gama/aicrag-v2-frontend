import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { cleanup, screen } from '@testing-library/react'
import { NewTaskView } from '..'

describe('NewTaskView', () => {
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
    renderWithProviders(<NewTaskView />)
    const newTaskView = screen.getByTestId('new-task-view')

    expect(newTaskView).toBeInTheDocument()
  })
})
