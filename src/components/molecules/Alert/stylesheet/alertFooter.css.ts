import { style } from '@vanilla-extract/css'
import { padding } from './alert.css'

export const alertFooter = style([
  padding,
  {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%'
  }
])
