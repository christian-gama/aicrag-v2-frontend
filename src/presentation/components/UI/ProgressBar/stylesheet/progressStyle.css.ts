import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { progress } from './keyframes'

export const progressStyle = style({
  animationName: progress,
  animationDuration: '2.5s',
  animationTimingFunction: 'cubic-bezier(.18,.32,1,-0.22)',
  animationFillMode: 'forwards',
  backgroundColor: vars.colors['cyan-400'],
  height: '100%'
})
