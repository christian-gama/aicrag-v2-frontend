/* eslint-disable no-octal-escape */
import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

const ulStyle = style({
  listStyle: 'none'
})

const liStyle = style({
  display: 'flex',

  '::before': {
    content: '\\2022',
    color: vars.colors.white,
    fontWeight: 'bold',
    display: 'inline-block',
    fontSize: '2rem',
    width: '1.6rem',
    marginRight: '0.8rem'
  },

  selectors: {
    '&:not(:last-child)': {
      marginBottom: '1.6rem'
    }
  }
})

export const popoverMessageListClasses = {
  ulStyle,
  liStyle
}
