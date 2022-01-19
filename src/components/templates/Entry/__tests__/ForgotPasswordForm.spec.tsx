import OverlayRoot from '@/../tests/mocks/overlayRoot'
import { composeStories } from '@storybook/testing-react'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import * as stories from '../ForgotPasswordForm.stories'

const { Default, WithError, WithSuccess } = composeStories(stories)

describe('ForgotPassword', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders default form', async () => {
    render(<Default {...Default.args} />)

    expect(screen.getByTestId('form')).toBeInTheDocument()
  })

  it('renders form with error', async () => {
    const { container } = render(<WithError {...WithError.args} />)

    await act(async () => await WithError.play({ canvasElement: container }))

    expect(screen.getByText(/email inválido\(a\): deve ser um email válido/i)).toBeInTheDocument()
  })

  it('renders form with success', async () => {
    const { container } = render(<WithSuccess {...WithSuccess.args} />)

    await act(async () => await WithSuccess.play({ canvasElement: container }))

    expect(screen.getByRole('button', { name: /[0-9]{2} s/i })).toBeInTheDocument()
  })
})