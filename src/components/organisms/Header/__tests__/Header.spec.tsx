import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { authVar } from '@/external/graphql/reactiveVars'
import { renderWithProviders, setupTests, setUser } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { Header } from '..'
import { useWindowDimensions } from '../../../_hooks'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('Header', () => {
  setupTests()

  afterEach(() => {
    authVar.logout()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
    setUser()
  })

  it('renders correctly', async () => {
    await renderWithProviders(<Header pageName="" />)
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument()
  })

  it('renders the page name', async () => {
    await renderWithProviders(<Header pageName="Any name" />)
    const pageName = screen.getByText(/any name/gi)

    expect(pageName).toBeInTheDocument()
  })

  it('renders the user name', async () => {
    await renderWithProviders(<Header pageName="" />)
    const userName = screen.getByText(
      RegExp(`^Olá, ${mockVariables.name}!$`, 'gi')
    )

    expect(userName).toBeInTheDocument()
  })

  it('renders the user name with a smile face if there is no access token', async () => {
    authVar.logout()
    await renderWithProviders(<Header pageName="" />)
    const userName = screen.getByText('Olá, :)!')

    expect(userName).toBeInTheDocument()
  })

  it('renders Alert when click on LogoutIcon', async () => {
    await renderWithProviders(<Header pageName="" />)
    const logoutIcon = screen.getByTestId('logout-icon')
    const alert = () => screen.getByTestId('alert')

    userEvent.click(logoutIcon)

    expect(alert()).toBeInTheDocument()
  })

  it('opens the About modal when clicking on QuestionIcon', async () => {
    await renderWithProviders(<Header pageName="" />)
    const questionIcon = screen.getByTestId('question-icon')

    userEvent.click(questionIcon)

    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('renders a BackIcon if has backHandler defined', async () => {
    const backHandler = jest.fn()
    await renderWithProviders(<Header pageName="" backHandler={backHandler} />)
    const backIcon = screen.getByTestId('back-icon')

    userEvent.click(backIcon)

    expect(backHandler).toHaveBeenCalled()
  })

  it('closes the About modal when clicking on backIcon from NavHeader', async () => {
    await renderWithProviders(<Header pageName="" />)
    const questionIcon = screen.getByTestId('question-icon')

    userEvent.click(questionIcon)
    const backIcon = screen.getByTestId('nav-header-back')
    userEvent.click(backIcon)

    expect(screen.queryByTestId('about')).not.toBeInTheDocument()
  })

  it('renders the MenuIcon if width is equal or lesser to 820', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 820, height: 1080 })
    await renderWithProviders(<Header pageName="" />)
    const menuIcon = screen.getByTestId('menu-icon')

    expect(menuIcon).toBeInTheDocument()
  })

  it('opens the menu when click on HeaderMenu with a width lesser or equal to 820', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 820, height: 1080 })
    await renderWithProviders(<Header pageName="" />)
    const menuIcon = screen.getByTestId('menu-icon')
    const headerMenu = () => screen.getByTestId('header-menu')

    userEvent.click(menuIcon)

    expect(headerMenu()).toBeInTheDocument()
  })

  it('opens About when clicking on about-item with a width lesser or equal to 820', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 820, height: 1080 })
    await renderWithProviders(<Header pageName="" />)
    const menuIcon = screen.getByTestId('menu-icon')
    const aboutItem = () => screen.getByTestId('about-item')
    const about = () => screen.getByTestId('about')

    userEvent.click(menuIcon)
    userEvent.click(aboutItem())

    expect(about()).toBeInTheDocument()
  })

  it('opens Alert when clicking on logout-item with a width lesser or equal to 820', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 820, height: 1080 })
    await renderWithProviders(<Header pageName="" />)
    const menuIcon = screen.getByTestId('menu-icon')
    const logoutItem = () => screen.getByTestId('logout-item')
    const alert = () => screen.getByTestId('alert')

    userEvent.click(menuIcon)
    userEvent.click(logoutItem())

    expect(alert()).toBeInTheDocument()
  })
})
