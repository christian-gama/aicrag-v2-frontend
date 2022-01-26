import { cleanup, render } from '@testing-library/react'
import React from 'react'
import getElement from '@/tests/helpers/getElement'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import ProgressBar from '../ProgressBar'

describe('ProgressBar', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    render(<ProgressBar loading />)
    const progressBar = getElement('progress-bar')

    expect(progressBar).toBeInTheDocument()
  })

  it('dismiss when loading prop was true and then becomes false', async () => {
    jest.useFakeTimers()
    const { rerender } = render(<ProgressBar loading={true} />)
    const progressBar = getElement('progress-bar')

    expect(progressBar).toBeInTheDocument()

    rerender(<ProgressBar loading={false} />)
    jest.advanceTimersByTime(1500)

    expect(progressBar).not.toBeInTheDocument()
  })
})
