import { setupTests } from '@/tests/helpers'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from '..'

describe('Menu', () => {
  setupTests()

  it('renders correctly', () => {
    render(<Menu buttons={[]} />, {
      wrapper: BrowserRouter
    })
    const menu = screen.getByTestId('menu')

    expect(menu).toBeInTheDocument()
  })

  it('has an active button if set button as active', () => {
    render(
      <Menu
        buttons={[
          { buttonName: 'Button', to: '/', active: true },
          { buttonName: 'Button 2', to: '/', active: false }
        ]}
      />,
      {
        wrapper: BrowserRouter
      }
    )
    const links = screen.getAllByTestId('menu-link')

    expect(links[0].className).toMatch(/active_true/gi)
    expect(links[1].className).toMatch(/active_false/gi)
  })
})
