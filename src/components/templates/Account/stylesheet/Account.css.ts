import { style } from '@vanilla-extract/css'

export const accountWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
})

export const account = style({
  display: 'flex',
  width: '50rem',
  flexDirection: 'column',
  gap: '4rem'
})
