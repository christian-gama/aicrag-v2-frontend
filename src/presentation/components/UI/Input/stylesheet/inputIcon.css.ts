import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const inputIcon = style({
  backgroundColor: vars.colors.white,
  position: 'absolute',
  right: '0',
  top: '50%',
  transform: 'translate(-50%, -50%)'
})
