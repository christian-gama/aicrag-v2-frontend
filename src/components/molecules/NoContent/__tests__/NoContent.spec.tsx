import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NoContent } from '..'

const mockFunction = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockFunction
}))

describe('NoContent', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<NoContent />)
    const noContent = screen.getByTestId('no-content')

    expect(noContent).toBeInTheDocument()
  })

  it('renders correctly', () => {
    renderWithProviders(<NoContent />)
    const button = screen.getByRole('button', {
      name: /adicionar nova tarefa/i
    })

    userEvent.click(button)

    expect(mockFunction).toHaveBeenCalled()
  })
})
