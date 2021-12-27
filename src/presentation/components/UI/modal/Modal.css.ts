import { style } from '@vanilla-extract/css'

export const backdropStyle = style({
  position: 'fixed',
  zIndex: '10',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '@supports': {
    '(webkitBackdropFilter: none) or (backdrop-filter: none)': {
      WebkitBackdropFilter: 'blur(2px)',
      backdropFilter: 'blur(2px)'
    }
  }
})

export const modalStyle = style({
  zIndex: '11',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})
