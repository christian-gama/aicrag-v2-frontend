import { cleanup, render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import ProgressBar from '../ProgressBar'

const makeSut = (props: ComponentPropsWithRef<typeof ProgressBar>) => {
  return render(<ProgressBar {...props} />)
}

describe('ProgressBar', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render when passing loading prop as true', () => {
    makeSut({ loading: true })

    expect(screen.getByTestId('progress-bar')).toBeInTheDocument()
  })

  it('should not render when passing loading prop as false', () => {
    makeSut({ loading: false })

    expect(screen.queryByTestId('progress-bar')).not.toBeInTheDocument()
  })
})
