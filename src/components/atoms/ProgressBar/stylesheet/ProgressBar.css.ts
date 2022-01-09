import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

// Keyframes
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
    width: '0vw',
    transform: 'translateX(0)'
  },

  '50%': {
    width: '100vw',
    transform: 'translateX(0)'
  },

  '100%': {
    transform: 'translateX(100vw)'
  }
})

// Styles
export const progressBar = style({
  boxShadow: vars.shadow.xsm,
  height: '0.8rem',
  position: 'fixed',
  top: 0,
  width: '100vw'
})

export const progressBarBackground = style({
  backgroundColor: vars.colors['gray-100'],
  height: '100%',
  width: '100%'
})

export const progressBarProgress = style({
  animation: `${moveGradientAnimation} 1s infinite alternate, ${progressAnimation} 3s linear infinite forwards`,
  backgroundImage: `linear-gradient(to right, ${vars.colors['cyan-800']} 0%, ${vars.colors['cyan-300']} 100%)`,
  backgroundSize: '300% 300%',
  height: '100%',
  width: '0'
})
