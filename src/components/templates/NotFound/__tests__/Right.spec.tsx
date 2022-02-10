import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useWindowDimensions } from '@/components/_hooks'
import { renderWithProviders } from '@/tests/helpers'
import { Right } from '../Right'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('Right', () => {
  afterEach(() => {
    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 520 })
  })

  it('renders correctly', async () => {
    await renderWithProviders(<Right />)
    const text = screen.getByText(/esta página não está disponível/gi)

    expect(text).toBeInTheDocument()
  })

  it('renders with text even with view width lesser or equal to 520', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520 })
    await renderWithProviders(<Right />)
    const text = screen.getByText(
      /o link que você acessou pode estar quebrado/gi
    )

    expect(text).toBeInTheDocument()
  })

  it('calls navigate when clicking on Home button', async () => {
    await renderWithProviders(<Right />)
    const button = screen.getByText(/home/i)

    userEvent.click(button)

    expect(mockNavigate).toHaveBeenCalled()
  })
})
