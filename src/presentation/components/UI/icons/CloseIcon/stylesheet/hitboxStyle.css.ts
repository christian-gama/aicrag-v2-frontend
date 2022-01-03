import { style } from '@vanilla-extract/css'

export const hitboxStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: '0.8rem',
  maxWidth: 'min-content',
  ':hover': {
    cursor: 'pointer'
  }
})
