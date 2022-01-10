import { style } from '@vanilla-extract/css'

export const backdrop = style({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: '100vh',
  position: 'fixed',
  width: '100vw',
  zIndex: '10',

  '@supports': {
    '(webkitBackdropFilter: none) or (backdrop-filter: none)': {
      backdropFilter: 'blur(2px)',
      WebkitBackdropFilter: 'blur(2px)'
    }
  }
})
