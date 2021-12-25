import { style } from '@vanilla-extract/css'

export const backdropStyle = style({
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: '10',
  width: '100vw',
  height: '100vh'
})

export const modalStyle = style({
  zIndex: '11',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})
