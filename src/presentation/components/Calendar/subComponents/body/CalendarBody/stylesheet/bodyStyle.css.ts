import { style } from '@vanilla-extract/css'

export const bodyStyle = style({
  display: 'grid',
  gridAutoRows: '50px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '28px',
  height: '100%',
  width: '100%',
  padding: '1.2rem 3.2rem'
})
