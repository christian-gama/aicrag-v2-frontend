import { style } from '@vanilla-extract/css'

export const backdrop = style({
  position: 'fixed',
  zIndex: '10',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  width: '100vw',
  height: '100vh',

  '@supports': {
    '(webkitBackdropFilter: none) or (backdrop-filter: none)': {
      WebkitBackdropFilter: 'blur(2px)',
      backdropFilter: 'blur(2px)'
    }
  }
})
