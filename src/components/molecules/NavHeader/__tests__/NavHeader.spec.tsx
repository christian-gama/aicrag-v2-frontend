import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { NavHeader } from '..'

describe('NavHeader', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<NavHeader title="" />)
    const navHeader = screen.getByTestId('nav-header')

    expect(navHeader).toBeInTheDocument()
  })
})
