import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const progressBar = style({
  boxShadow: vars.shadow.xsm,
  height: '0.8rem',
  position: 'fixed',
  top: 0,
  width: '100vw'
})
