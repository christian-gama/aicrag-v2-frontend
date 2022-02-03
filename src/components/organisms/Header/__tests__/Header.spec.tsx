import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { Header } from '..'
import { useWindowDimensions } from '../../../_hooks'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('Header', () => {
  const accessTokenStorage = makeAccessTokenStorage()
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    accessTokenStorage.reset()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
    accessTokenStorage.set(mockVariables.token)
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<Header pageName="" />)
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument()
  })

  it('renders the page name', () => {
    renderWithProviders(<Header pageName="Any name" />)
    const pageName = screen.getByText(/any name/gi)

    expect(pageName).toBeInTheDocument()
  })

  it('renders the user name', () => {
    renderWithProviders(<Header pageName="" />)
    const userName = screen.getByText(
      RegExp(`^Olá, ${mockVariables.name}!$`, 'gi')
    )

    expect(userName).toBeInTheDocument()
  })

  it('renders Alert when click on LogoutIcon', () => {
    renderWithProviders(<Header pageName="" />)
    const logoutIcon = screen.getByTestId('logout-icon')
    const alert = () => screen.getByTestId('alert')

    userEvent.click(logoutIcon)

    expect(alert()).toBeInTheDocument()
  })

  it('opens the About modal when clicking on QuestionIcon', () => {
    renderWithProviders(<Header pageName="" />)
    const questionIcon = screen.getByTestId('question-icon')

    userEvent.click(questionIcon)

    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('renders a BackIcon if has backHandler defined', () => {
    const backHandler = jest.fn()
    renderWithProviders(<Header pageName="" backHandler={backHandler} />)
    const backIcon = screen.getByTestId('back-icon')

    userEvent.click(backIcon)

    expect(backHandler).toHaveBeenCalled()
  })

  it('closes the About modal when clicking on backIcon from NavHeader', async () => {
    renderWithProviders(<Header pageName="" />)
    const questionIcon = screen.getByTestId('question-icon')

    userEvent.click(questionIcon)
    const backIcon = screen.getByTestId('nav-header-back')
    userEvent.click(backIcon)

    expect(screen.queryByTestId('about')).not.toBeInTheDocument()
  })

  it('renders the MenuIcon if width is equal or lesser to 820', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 820, height: 1080 })
    renderWithProviders(<Header pageName="" />)
    const menuHamburguer = screen.getByTestId('menu-icon')

    expect(menuHamburguer).toBeInTheDocument()
  })
})
