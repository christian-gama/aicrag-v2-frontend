import { style } from '@vanilla-extract/css'

export const iconHitbox = style({
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  padding: '0.8rem',
  transition: 'background-color 0.1s ease-in-out',

  ':hover': {
    cursor: 'pointer'
  }
})
