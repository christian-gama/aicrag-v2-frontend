import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from '../Menu'

describe('Menu', () => {
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
          { buttonName: 'Button 2', to: '/' }
        ]}
      />,
      {
        wrapper: BrowserRouter
      }
    )
    const links = screen.getAllByTestId('menu-link')

    expect(links[0]).toHaveAttribute('data-active', 'true')
    expect(links[1]).toHaveAttribute('data-active', 'false')
    expect(links[0].className).toMatch(/active/gi)
  })
})
