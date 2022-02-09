import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { SideBar } from '..'

describe('SideBar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', async () => {
    await renderWithProviders(<SideBar />)
    const sideBar = screen.getByTestId('side-bar')

    expect(sideBar).toBeInTheDocument()
  })
})
