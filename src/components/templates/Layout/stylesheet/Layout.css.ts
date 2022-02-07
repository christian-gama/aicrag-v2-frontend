import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const layout = style({
  display: 'grid',
  position: 'relative',
  gridTemplateAreas: `
  "sidebar header header"
  "sidebar main   main"`,
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '29rem 1fr',

  '@media': {
    [breakpoints.widescreen]: {
      gridTemplateColumns: '25rem 1fr'
    },

    [breakpoints.desktop]: {
      gridTemplateAreas: `
      "header  header  header"
      "main    main    main"
      "sidebar sidebar sidebar"`,
      gridTemplateRows: 'auto 1fr auto'
    }
  }
})

export const layoutCard = style({
  gridArea: 'main',
  margin: '2rem',
  minHeight: 'calc(100vh - 12rem - 2rem - 2rem)',
  height: '100%',

  '@media': {
    [breakpoints.desktop]: {
      margin: '0.6rem 0 6.6rem 0',
      height: '100%',
      minHeight: 'calc(100vh - 13.2rem - 5.6rem)'
    }
  }
})
