import OverlayRoot from '@/../tests/mocks/overlayRoot'
import { composeStories } from '@storybook/testing-react'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import * as stories from '../ForgotPasswordCard.stories'

const { Default } = composeStories(stories)
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

  it('renders default form', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 500 })

    render(<Default />)
    expect(screen.getByRole('heading', { name: /esqueceu sua senha\?/i })).toBeInTheDocument()
  })

  it('should render with border if width is greater than 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 500 })

    render(<Default />)

    const card = screen.getByTestId('card')

    expect(card).toHaveStyle('border-radius: 3px')
  })

  it('should render with no border if width is lesser than 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 500, height: 500 })

    render(<Default />)

    const card = screen.getByTestId('card')

    expect(card).toHaveStyle('border-radius: 0')
  })
})
