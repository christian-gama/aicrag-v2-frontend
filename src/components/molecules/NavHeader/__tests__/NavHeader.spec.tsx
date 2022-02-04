import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { NavHeader } from '..'

describe('NavHeader', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<NavHeader title="" />)
    const navHeader = screen.getByTestId('nav-header')

    expect(navHeader).toBeInTheDocument()
  })
})
