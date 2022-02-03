import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { authVar } from '@/external/graphql/reactiveVars'
import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '..'

describe('Header', () => {
  const accessTokenStorage = makeAccessTokenStorage()
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    accessTokenStorage.reset()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
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

  it('logs the user out when click on LogoutIcon', () => {
    const logoutSpy = jest.spyOn(authVar, 'logout')
    renderWithProviders(<Header pageName="" />)
    const logoutIcon = screen.getByTestId('logout-icon')

    userEvent.click(logoutIcon)

    expect(logoutSpy).toHaveBeenCalled()
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
})
