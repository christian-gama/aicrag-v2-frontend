export class OverlayRoot {
  private overlayRoot: HTMLElement | null = null

  addOverlayRoot (): void {
    this.overlayRoot = document.createElement('div')
    this.overlayRoot.setAttribute('id', 'overlay-root')
    document.body.append(this.overlayRoot)
  }

  removeOverlayRoot (): void {
    if (this.overlayRoot) {
      this.overlayRoot.remove()
    }
  }
}
