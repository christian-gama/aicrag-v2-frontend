import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { mockVariables } from '@/tests/mocks'
import { render, cleanup, screen } from '@testing-library/react'
import { Header } from '..'

describe('Header', () => {
  const accessTokenStorage = makeAccessTokenStorage()

  afterEach(() => {
    cleanup()
    accessTokenStorage.reset()
  })

  beforeEach(() => {
    accessTokenStorage.set(mockVariables.token)
  })

  it('renders correctly', () => {
    render(<Header pageName="" />)
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument()
  })

  it('renders the page name', () => {
    render(<Header pageName="Any name" />)
    const pageName = screen.getByText(/any name/gi)

    expect(pageName).toBeInTheDocument()
  })

  it('renders the user name', () => {
    render(<Header pageName="" />)
    const userName = screen.getByText(mockVariables.name)

    expect(userName).toBeInTheDocument()
  })
})
