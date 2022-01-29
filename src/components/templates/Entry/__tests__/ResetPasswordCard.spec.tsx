import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import ResetPasswordCard from '../ResetPasswordCard'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('ResetPasswordCard', () => {
  afterEach(() => {
    cleanup()

    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 520 })
  })

  it('renders correctly', () => {
    renderWithProviders(<ResetPasswordCard />)
    const heading = screen.getByRole('heading', {
      name: /resete a sua senha/i
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders with no border if width is lesser or equal to 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 500 })
    renderWithProviders(<ResetPasswordCard />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
