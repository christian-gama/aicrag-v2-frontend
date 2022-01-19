module.exports = () => {
  const overlayRoot = document.createElement('div')
  overlayRoot.setAttribute('id', 'overlay-root')
  document.body.append(overlayRoot)
}
