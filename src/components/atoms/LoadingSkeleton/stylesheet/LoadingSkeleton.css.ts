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
  width: '100%',
  columns: '1',
  gap: '1',
  marginTop: '0',
  marginBottom: '0'
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
  backgroundImage: vars.colors.gradient.gray,
  backgroundSize: '200% 100%',
  width: '100%',
  height: '2.8rem',
  borderRadius: '0.2rem',
  animation: `${gradientAnimation} 1.2s ease-in-out infinite`
})
