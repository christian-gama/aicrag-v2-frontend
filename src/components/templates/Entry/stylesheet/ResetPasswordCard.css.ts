import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { windowDimensionVars } from './EntryCard.css'

export const resetPasswordCard = style({
  height: '48rem',
  position: 'relative',
  width: '60rem',

  '@media': {
    [breakpoints.tablet]: {
      width: '50rem'
    },

    [breakpoints.mobile]: {
      height: '100%',
      margin: '0 auto',
      minHeight: windowDimensionVars.height,
      width: '100vw'
    }
  }
})

export const resetPasswordCardWrapper = style({
  left: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  '@media': {
    [breakpoints.mobile]: {
      left: '0%',
      top: '0%',
      transform: 'translate(0%, 0%)'
    }
  }
})

export const resetPasswordCardHeader = style({
  alignItems: 'center',
  display: 'flex',
  height: '14rem',
  justifyContent: 'center',
  padding: '0 4rem',

  '@media': {
    [breakpoints.mobile]: {
      height: '12rem',
      padding: '0 0.8rem'
    }
  }
})
