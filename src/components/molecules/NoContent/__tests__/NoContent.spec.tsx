import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NoContent } from '..'

const mockFunction = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockFunction
}))

describe('NoContent', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<NoContent />)
    const noContent = screen.getByTestId('no-content')

    expect(noContent).toBeInTheDocument()
  })

  it('renders correctly', async () => {
    await renderWithProviders(<NoContent />)
    const button = screen.getByRole('button', {
      name: /adicionar nova tarefa/i
    })

    userEvent.click(button)

    expect(mockFunction).toHaveBeenCalled()
  })
})
