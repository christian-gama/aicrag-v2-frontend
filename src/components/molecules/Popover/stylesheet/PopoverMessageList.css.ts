import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const popoverMessageList = style({
  listStyle: 'none'
})

export const popoverMessageListItem = style({
  display: 'flex',

  '::before': {
    display: 'inline-block',
    marginRight: '0.8rem',
    width: '1.6rem',
    color: vars.colors.white,
    fontSize: '2rem',
    fontWeight: 'bold',
    content: '\\2022'
  },

  selectors: {
    '&:not(:last-child)': {
      marginBottom: '1.6rem'
    }
  }
})
