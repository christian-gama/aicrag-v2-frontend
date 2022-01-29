import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { windowDimensionVars } from './EntryCard.css'

export const forgotPasswordCard = style({
  height: '40rem',
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

export const forgotPasswordCardWrapper = style({
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

export const forgotPasswordCardHeader = style({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  height: '14rem',
  justifyItems: 'center',
  padding: '0 4rem',

  '@media': {
    [breakpoints.mobile]: {
      height: '12rem',
      padding: '0 0.8rem'
    }
  }
})
