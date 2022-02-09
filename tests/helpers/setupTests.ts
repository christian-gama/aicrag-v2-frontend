import { cleanup } from '@testing-library/react'
import { OverlayRoot } from '.'

export const setupTests = () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
    jest.restoreAllMocks()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })
}
