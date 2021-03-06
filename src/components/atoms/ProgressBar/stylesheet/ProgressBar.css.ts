import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

const moveGradientAnimation = keyframes({
  from: {
    backgroundPosition: '0 100%'
  },

  to: {
    backgroundPosition: '100% 0'
  }
})

const progressAnimation = keyframes({
  '0%': {
    transform: 'translateX(0)',
    width: '0vw'
  },

  '50%': {
    transform: 'translateX(0)',
    width: '100vw'
  },

  '100%': {
    transform: 'translateX(100vw)'
  }
})

export const progressBar = style({
  position: 'fixed',
  top: 0,
  boxShadow: vars.shadow.xsm,
  width: '100vw',
  height: '1rem'
})

export const progressBarBackground = style({
  backgroundColor: vars.colors['gray-50'],
  width: '100%',
  height: '100%'
})

export const progressBarProgress = style({
  backgroundImage: `linear-gradient(to right, ${vars.colors['cyan-600']} 0%, ${vars.colors['cyan-200']} 100%)`,
  backgroundSize: '300% 300%',
  width: '0',
  height: '100%',
  animation: `${moveGradientAnimation} 1s infinite alternate, ${progressAnimation} 1.5s linear infinite forwards`
})
