import OverlayRoot from '@/../tests/mocks/overlayRoot'
import { composeStories } from '@storybook/testing-react'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Backdrop from '../Backdrop'
import * as stories from '../Backdrop.stories'

const { ClickOnBackdrop, Default, PressEscape } = composeStories(stories)

describe('Backdrop', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render Backdrop correctly ', () => {
    render(<Backdrop isOpen />)

    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('should dismiss the backdrop when click on it', async () => {
    render(<ClickOnBackdrop {...ClickOnBackdrop.args} />)
    const overlayRoot = document.getElementById('overlay-root') as HTMLElement

    await ClickOnBackdrop.play({ canvasElement: overlayRoot })

    expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument()
  })

  it('should dismiss when pressing "Escape"', async () => {
    render(<PressEscape {...PressEscape.args} />)
    const overlayRoot = document.getElementById('overlay-root') as HTMLElement

    await PressEscape.play({ canvasElement: overlayRoot })

    expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument()
  })

  it('should not render the backdrop when isOpen is false', () => {
    render(<Default {...Default.args} isOpen={false} />)

    const modal = screen.queryByTestId('backdrop')

    expect(modal).not.toBeInTheDocument()
  })

  it('should keep the modal on the screen if press any other key but "Escape"', () => {
    render(<Default {...Default.args} />)

    const backdrop = screen.queryByTestId('backdrop')
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    document.dispatchEvent(event)

    expect(backdrop).toBeInTheDocument()
  })

  it('should call onDismiss when pressing "Escape"', async () => {
    const onDismiss = jest.fn()
    render(<PressEscape {...PressEscape.args} onDismiss={onDismiss} />)
    const overlayRoot = document.getElementById('overlay-root') as HTMLElement

    await PressEscape.play({ canvasElement: overlayRoot })

    expect(onDismiss).toHaveBeenCalled()
  })

  it('should call onDismiss when pressing clicking on backdrop', async () => {
    const onDismiss = jest.fn()
    render(<ClickOnBackdrop {...ClickOnBackdrop.args} onDismiss={onDismiss} />)
    const overlayRoot = document.getElementById('overlay-root') as HTMLElement

    await ClickOnBackdrop.play({ canvasElement: overlayRoot })

    expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument()
  })
})
