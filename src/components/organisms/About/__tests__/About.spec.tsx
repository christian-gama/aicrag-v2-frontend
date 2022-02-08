import { useWindowDimensions } from '@/components/_hooks'
import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from '..'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('About', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
  })

  it('renders correctly', () => {
    renderWithProviders(<About isOpen />)
    const about = screen.getByTestId('about')

    expect(about).toBeInTheDocument()
  })

  it('closes the about modal when clicking on BackIcon', () => {
    renderWithProviders(<About isOpen />)
    const closeIcon = screen.getByTestId('nav-header-back')
    const about = screen.queryByTestId('about')

    userEvent.click(closeIcon)

    expect(about).not.toBeInTheDocument()
  })

  it('calls dismissHandler if defined', () => {
    const dismissHandler = jest.fn()
    renderWithProviders(<About dismissHandler={dismissHandler} isOpen />)
    const closeIcon = screen.getByTestId('nav-header-back')

    userEvent.click(closeIcon)

    expect(dismissHandler).toHaveBeenCalled()
  })

  it('renders Card without border if width is equal or lesser to 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 1080 })
    renderWithProviders(<About isOpen />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
