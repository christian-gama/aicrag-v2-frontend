import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { NewTaskView } from '..'

describe('NewTaskView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<NewTaskView />)
    const newTaskView = screen.getByTestId('new-task-view')

    expect(newTaskView).toBeInTheDocument()
  })
})
