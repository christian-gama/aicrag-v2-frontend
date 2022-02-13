import { style } from '@vanilla-extract/css'

export const tablePagination = style({
  display: 'flex',
  gridRow: '3/4',
  gridColumn: '2/3',
  alignItems: 'center',
  justifyContent: 'center',
  justifySelf: 'end',
  marginTop: '1.2rem',
  gap: '1.6rem'
})
