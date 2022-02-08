import { renderWithProviders, waitFetch } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { SideBar } from '..'

describe('SideBar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', async () => {
    renderWithProviders(<SideBar />)
    const sideBar = screen.getByTestId('side-bar')
    await waitFetch()

    expect(sideBar).toBeInTheDocument()
  })
})
