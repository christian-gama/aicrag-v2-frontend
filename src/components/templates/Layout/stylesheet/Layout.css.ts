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
      gridTemplateColumns: '27rem 1fr'
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

  '@media': {
    [breakpoints.widescreen]: {
      margin: '1.2rem',
      minHeight: 'calc(100vh - 12rem - 1.2rem - 1.2rem)'
    },

    [breakpoints.desktop]: {
      margin: '0.6rem 0 6.6rem 0',
      minHeight: 'calc(100vh - 13.6rem - 5.6rem)'
    },

    [breakpoints.mobile]: {
      minHeight: 'calc(100vh - 15.6rem - 5.6rem)'
    }
  }
})
