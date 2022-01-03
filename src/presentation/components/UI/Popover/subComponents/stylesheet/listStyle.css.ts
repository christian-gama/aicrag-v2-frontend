import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const listStyle = style({
  display: 'flex',

  '::before': {
    color: vars.colors.white,
    content: '\\2022',
    display: 'inline-block',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginRight: '0.8rem',
    width: '1.6rem'
  },

  selectors: {
    '&:not(:last-child)': {
      marginBottom: '1.6rem'
    }
  }
})
