import { useWindowDimensions } from '@/components/_hooks'
import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { cleanup, screen } from '@testing-library/react'
import { Layout } from '..'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('Layout', () => {
  const accessTokenStorage = makeAccessTokenStorage()
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
    accessTokenStorage.reset()
  })

  beforeEach(() => {
    accessTokenStorage.set(mockVariables.token)
    overlayRoot.addOverlayRoot()
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
  })

  it('renders correctly', () => {
    renderWithProviders(<Layout pageName="" />)
    const layout = screen.getByTestId('layout')

    expect(layout).toBeInTheDocument()
  })

  it('renders Card without border and correct padding if width is equal or lesser to 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 1080 })
    renderWithProviders(<Layout pageName="" />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
