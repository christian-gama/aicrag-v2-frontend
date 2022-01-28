import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import ResetPassword from '../ResetPassword'

describe('ResetPassword', () => {
  it('renders correctly', () => {
    renderWithProviders(<ResetPassword />)
  })
})
