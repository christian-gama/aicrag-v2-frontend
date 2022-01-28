import { style } from '@vanilla-extract/css'

export const center = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})
