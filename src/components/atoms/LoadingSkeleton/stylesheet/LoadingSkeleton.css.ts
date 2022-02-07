import { createGlobalTheme, keyframes, style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

const gradientAnimation = keyframes({
  '0%': {
    backgroundPosition: '0% 50%'
  },

  '50%': {
    backgroundPosition: '100% 50%'
  },

  '100%': {
    backgroundPosition: '0% 50%'
  }
})

export const loadingSkeletonVars = createGlobalTheme(':root', {
  columns: '1',
  marginTop: '0',
  marginBottom: '0',
  width: '100%',
  gap: '1'
})

export const loadingSkeleton = style({
  display: 'grid',
  gridTemplateColumns: loadingSkeletonVars.columns,
  justifyContent: 'center',
  marginTop: loadingSkeletonVars.marginTop,
  marginRight: 'auto',
  marginBottom: loadingSkeletonVars.marginBottom,
  marginLeft: 'auto',
  width: loadingSkeletonVars.width,
  gap: loadingSkeletonVars.gap
})

export const loadingSkeletonColumn = style({
  borderRadius: '0.1rem',
  backgroundImage: vars.colors.gradient.gray,
  backgroundSize: '300% 100%',
  width: '100%',
  height: '2rem',
  animation: `${gradientAnimation} 0.75s ease infinite`,

  selectors: {
    '&:nth-child(1)': {
      gridColumn: '1 / -1'
    },

    '&:nth-child(2)': {
      gridColumn: '1 / 2'
    },

    '&:nth-child(3)': {
      gridColumn: '2 / -1'
    },

    '&:nth-child(4)': {
      gridColumn: '1 / -1'
    },

    '&:nth-child(5)': {
      gridColumn: '1 / 2'
    },

    '&:nth-child(6)': {
      gridColumn: '2 / 3'
    },

    '&:nth-child(7)': {
      gridColumn: '3 / -1'
    },

    '&:nth-child(8)': {
      gridColumn: '1 / 3'
    },

    '&:nth-child(9)': {
      gridColumn: '2 / -1'
    },

    '&:nth-child(10)': {
      gridColumn: '1 / -1'
    },

    '&:nth-child(11)': {
      gridColumn: '2 / 3'
    }
  }
})
