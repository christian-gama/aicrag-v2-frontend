import { style } from '@vanilla-extract/css'

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '1rem',
  width: '100%',

  selectors: {
    '&:first-of-type': {
      marginTop: '0'
    }
  }
})
