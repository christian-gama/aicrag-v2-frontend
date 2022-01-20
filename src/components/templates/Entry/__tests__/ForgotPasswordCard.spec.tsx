import { composeStories } from '@storybook/testing-react'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import * as stories from '../ForgotPasswordCard.stories'

const { ForgotPasswordCard } = composeStories(stories)
jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('ForgotPassword', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders ForgotPasswordCard form', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 500 })

    render(<ForgotPasswordCard />)

    expect(screen.getByRole('heading', { name: /esqueceu sua senha\?/i })).toBeInTheDocument()
  })

  it('should render with border if width is greater than 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 500 })

    render(<ForgotPasswordCard />)

    const card = screen.getByTestId('card')

    expect(card).toHaveStyle('border-radius: 3px')
  })

  it('should render with no border if width is lesser than 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 500, height: 500 })

    render(<ForgotPasswordCard />)

    const card = screen.getByTestId('card')

    expect(card).toHaveStyle('border-radius: 0')
  })
})
