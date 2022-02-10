import { useWindowDimensions } from '@/components/_hooks'
import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from '..'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('About', () => {
  setupTests()

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
  })

  it('renders correctly', async () => {
    await renderWithProviders(<About isOpen />)
    const about = screen.getByTestId('about')

    expect(about).toBeInTheDocument()
  })

  it('closes the about modal when async clicking on BackIcon', async () => {
    await renderWithProviders(<About isOpen />)
    const closeIcon = screen.getByTestId('nav-header-back')
    const about = screen.queryByTestId('about')

    userEvent.click(closeIcon)

    expect(about).not.toBeInTheDocument()
  })

  it('calls dismissHandler i asyncf defined', async () => {
    const dismissHandler = jest.fn()
    await renderWithProviders(<About dismissHandler={dismissHandler} isOpen />)
    const closeIcon = screen.getByTestId('nav-header-back')

    userEvent.click(closeIcon)

    expect(dismissHandler).toHaveBeenCalled()
  })

  it('renders Card without border if width is equal or lesser to  async520', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 1080 })
    await renderWithProviders(<About isOpen />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
