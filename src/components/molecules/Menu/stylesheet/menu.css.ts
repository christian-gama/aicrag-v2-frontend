import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const menu = style({
  display: 'flex',
  width: '100%',
  height: '4.8rem',
  backgroundColor: vars.colors.white
})
