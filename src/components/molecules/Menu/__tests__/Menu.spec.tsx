import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from '../Menu'
import MenuProps from '../protocols/Menu.model'

const makeSut = (props: MenuProps) => {
  return render(
    <>
      <BrowserRouter>
        <Routes location={'/'}>
          <Route path={'/'} element={<Menu {...props} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

describe('Menu', () => {
  it('should have the correct href', () => {
    const buttons = [
      { buttonName: 'Home', to: 'Home' },
      { buttonName: 'About', to: 'About' },
      { buttonName: 'Contact', to: 'Contact' }
    ]
    const url = '/teste/url/'
    makeSut({ buttons, url })

    const link = screen.getByTestId('menu-link-home')

    expect(link).toHaveAttribute('href', '/teste/url/home')
  })
})
