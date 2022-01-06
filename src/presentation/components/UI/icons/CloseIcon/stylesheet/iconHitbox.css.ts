import { style } from '@vanilla-extract/css'

export const iconHitbox = style({
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: 'min-content',
  padding: '0.8rem',

  ':hover': {
    cursor: 'pointer'
  }
})
