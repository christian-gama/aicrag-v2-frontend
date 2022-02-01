import { cleanup, screen } from '@testing-library/react'
import { useWindowDimensions } from '@/components/_hooks'
import { renderWithProviders } from '@/tests/helpers'
import { EntryCard } from '..'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('EntryCard', () => {
  afterEach(() => {
    cleanup()

    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 520 })
  })

  it('renders correctly', () => {
    renderWithProviders(<EntryCard />)
    const card = screen.getByTestId('card')

    expect(card).toBeInTheDocument()
  })

  it('renders with no border if width is lesser or equal to 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520 })
    renderWithProviders(<EntryCard />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
