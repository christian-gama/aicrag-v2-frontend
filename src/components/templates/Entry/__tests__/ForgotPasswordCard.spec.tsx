import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import ForgotPasswordCard from '../ForgotPasswordCard'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('ForgotPassword', () => {
  afterEach(() => {
    cleanup()

    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 520 })
  })

  it('renders correctly', () => {
    renderWithProviders(<ForgotPasswordCard />)
    const heading = screen.getByRole('heading', {
      name: /esqueceu sua senha\?/i
    })

    expect(heading).toBeInTheDocument()
  })
  it('renders with no border if width is lesser or equal to 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 500 })
    renderWithProviders(<ForgotPasswordCard />)
    const card = screen.getByTestId('card')

    expect(card).toHaveStyle('border-radius: 0')
  })
})
