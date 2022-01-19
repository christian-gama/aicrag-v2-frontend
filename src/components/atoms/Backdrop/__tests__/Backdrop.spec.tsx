import { fireEvent } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import * as stories from '../Backdrop.stories'

const { ClickOnBackdrop, ClickOnBackdropWithAction, Default, PressEscape, PressEscapeWithAction } =
  composeStories(stories)

describe('Backdrop', () => {
  const overlayRoot = new OverlayRoot()
  const alertSpy = jest.spyOn(window, 'alert')

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render Backdrop correctly ', () => {
    render(<Default {...Default.args} />)

    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('should not render the backdrop when isOpen is false', () => {
    render(<Default {...Default.args} isOpen={false} />)

    const modal = screen.queryByTestId('backdrop')

    expect(modal).not.toBeInTheDocument()
  })

  it('should keep the modal on the screen if press any other key but "Escape"', () => {
    render(<Default {...Default.args} />)

    const backdrop = screen.queryByTestId('backdrop')
    fireEvent.keyDown(document, { key: 'Enter' })

    expect(backdrop).toBeInTheDocument()
  })

  describe('ClickOnBackdrop', () => {
    it('should dismiss the backdrop when click on it', async () => {
      render(<ClickOnBackdrop {...ClickOnBackdrop.args} />)
      const overlayRoot = document.getElementById('overlay-root') as HTMLElement

      await ClickOnBackdrop.play({ canvasElement: overlayRoot })

      expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument()
    })

    it('should call onDismiss when pressing clicking on backdrop', async () => {
      render(<ClickOnBackdropWithAction {...ClickOnBackdropWithAction.args} />)
      const overlayRoot = document.getElementById('overlay-root') as HTMLElement

      await ClickOnBackdrop.play({ canvasElement: overlayRoot })

      expect(alertSpy).toHaveBeenCalled()
    })
  })

  describe('PressEscape', () => {
    it('should dismiss when pressing "Escape"', async () => {
      render(<PressEscape {...PressEscape.args} />)
      const overlayRoot = document.getElementById('overlay-root') as HTMLElement

      await PressEscape.play({ canvasElement: overlayRoot })

      expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument()
    })

    it('should call onDismiss when pressing "Escape"', async () => {
      render(<PressEscapeWithAction {...PressEscapeWithAction.args} />)
      const overlayRoot = document.getElementById('overlay-root') as HTMLElement

      await PressEscape.play({ canvasElement: overlayRoot })

      expect(alertSpy).toHaveBeenCalled()
    })
  })
})
