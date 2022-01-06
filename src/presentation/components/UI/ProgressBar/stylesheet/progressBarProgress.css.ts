import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { moveGradient, progress } from './keyframes'

export const progressBarProgress = style({
  animation: `${moveGradient} 1s infinite alternate, ${progress} 3s linear infinite forwards`,
  backgroundImage: `linear-gradient(to right, ${vars.colors['cyan-800']} 0%, ${vars.colors['cyan-300']} 100%)`,
  backgroundSize: '300% 300%',
  height: '100%',
  width: '0'
})
