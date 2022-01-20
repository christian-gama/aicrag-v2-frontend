import { render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from '../Menu'

const makeSut = (props: ComponentPropsWithRef<typeof Menu>) => {
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
      { buttonName: 'Home', to: '/teste/url/Home' },
      { buttonName: 'About', to: '/teste/url/About' },
      { buttonName: 'Contact', to: '/teste/url/Contact' }
    ]

    makeSut({ buttons })

    const link = screen.getByTestId('menu-link-home')

    expect(link).toHaveAttribute('href', '/teste/url/home')
  })
})
