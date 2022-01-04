import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const progressBarStyle = style({
  position: 'fixed',
  top: 0,
  width: '100vw',
  height: '0.8rem',
  boxShadow: vars.shadow.xsm
})
