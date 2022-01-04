import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { progress } from './keyframes'

export const progressStyle = style({
  animationName: progress,
  animationDuration: '2.5s',
  animationTimingFunction: 'cubic-bezier(.18,.32,1,-0.22)',
  animationFillMode: 'forwards',
  backgroundImage: `linear-gradient(to right, ${vars.colors['cyan-700']} 0%, ${vars.colors['cyan-300']} 100%)`,
  height: '100%'
})
