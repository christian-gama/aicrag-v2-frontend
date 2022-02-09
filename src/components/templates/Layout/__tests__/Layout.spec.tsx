import { screen } from '@testing-library/react'
import { useWindowDimensions } from '@/components/_hooks'
import { renderWithProviders, setupTests } from '@/tests/helpers'
import { Layout } from '..'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('Layout', () => {
  setupTests()

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
  })

  it('renders correctly', async () => {
    await renderWithProviders(<Layout pageName="" />)
    const layout = screen.getByTestId('layout')

    expect(layout).toBeInTheDocument()
  })

  it('renders with the correct height if width is lesser or equal to 1368', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 1368, height: 768 })
    await renderWithProviders(<Layout pageName="" />)
    const layout = screen.getByTestId('layout')

    expect(layout).toBeInTheDocument()
  })

  it('renders Card without border and correct padding if width is equal or lesser to 1025', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 1025, height: 768 })
    await renderWithProviders(<Layout pageName="" />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
