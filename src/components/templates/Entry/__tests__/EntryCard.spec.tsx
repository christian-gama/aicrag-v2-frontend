import { screen } from '@testing-library/react'
import { useWindowDimensions } from '@/components/_hooks'
import { renderWithProviders, setupTests } from '@/tests/helpers'
import { EntryCard } from '..'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('EntryCard', () => {
  setupTests()

  afterEach(() => {
    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 520 })
  })

  it('renders correctly', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
    await renderWithProviders(<EntryCard />)
    const card = screen.getByTestId('card')

    expect(card).toBeInTheDocument()
  })

  it('renders with no border if width is lesser or equal to 520', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 768 })
    await renderWithProviders(<EntryCard />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })

  it('card has a minimun of 620px of height', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 619 })
    await renderWithProviders(<EntryCard />)
    const card = screen.getByTestId('card')

    expect(card.style).toHaveLength(4)
  })
})
