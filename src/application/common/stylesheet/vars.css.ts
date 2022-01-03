import { createGlobalTheme } from '@vanilla-extract/css'

const shadow = {
  sm: '0px 5px 10px rgba(0, 0, 0, 0.15)',
  md: '0px 12px 25px rgba(0, 0, 0, 0.075)',
  lg: '0px 10px 30px rgba(0, 0, 0, 0.175)'
}

const font = {
  h1: {
    fontSize: '4.8rem',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 'regular'
  },
  h2: {
    fontSize: '3.2rem',
    fontFamily: 'Lato, sans-serif'
  },
  h3: {
    fontSize: '2.8rem',
    fontFamily: 'Open Sans, sans-serif'
  },
  h4: {
    fontSize: '1.8rem',
    fontFamily: 'Open Sans, sans-serif'
  },
  p: {
    fontSize: '1.6rem',
    fontFamily: 'Open Sans, sans-serif'
  },
  button: {
    fontSize: '1.6rem',
    fontFamily: 'Open Sans, sans-serif',
    textTransform: 'uppercase'
  },
  hint: {
    fontSize: '1.4rem',
    fontFamily: 'Open Sans, sans-serif'
  }
}

const colors = {
  white: '#FFFFFF',
  black: '#111111',
  transparent: 'transparent',

  text: {
    dark: '#222527',
    default: '#363A3C',
    light: '#727577',
    placeholder: '#9b9d9e'
  },

  'navy-50': '#e2e6eb',
  'navy-100': '#b6c0cc',
  'navy-200': '#8596aa',
  'navy-300': '#546c88',
  'navy-400': '#304d6f',
  'navy-500': '#0b2d55',
  'navy-600': '#0a284e',
  'navy-700': '#082244',
  'navy-800': '#061c3b',
  'navy-900': '#03112a',

  'cyan-50': '#e4f4f5',
  'cyan-100': '#bde3e6',
  'cyan-200': '#91d1d5',
  'cyan-300': '#64bec4',
  'cyan-400': '#43b0b8',
  'cyan-500': '#22a2ab',
  'cyan-600': '#1e9aa4',
  'cyan-700': '#19909a',
  'cyan-800': '#148691',
  'cyan-900': '#0c7580',

  'snow-50': '#fefefe',
  'snow-100': '#fefefc',
  'snow-200': '#fdfdfa',
  'snow-300': '#fcfcf8',
  'snow-400': '#fbfbf7',
  'snow-500': '#fafaf5',
  'snow-600': '#f9f9f4',
  'snow-700': '#f9f9f2',
  'snow-800': '#f8f8f0',
  'snow-900': '#f6f6ee',

  'gray-50': '#f7f7f8;',
  'gray-100': '#ebeced',
  'gray-200': '#dee0e2',
  'gray-300': '#d0d3d6',
  'gray-400': '#c6c9cd',
  'gray-500': '#bcc0c4',
  'gray-600': '#b6babe',
  'gray-700': '#adb2b6',
  'gray-800': '#a5aaaf',
  'gray-900': '#979ca2',

  'info-50': '#e2e8f4',
  'info-100': '#b7c5e3',
  'info-200': '#889ed1',
  'info-300': '#5877bf',
  'info-400': '#3459b1',
  'info-500': '#103ca3',
  'info-600': '#0e369b',
  'info-700': '#0c2e91',
  'info-800': '#092788',
  'info-900': '#051a77',

  'success-50': '#e3f3e2',
  'success-100': '#b9e2b7',
  'success-200': '#8acf88',
  'success-300': '#5bbb58',
  'success-400': '#37ad34',
  'success-500': '#149e10',
  'success-600': '#12960e',
  'success-700': '#0e8c0c',
  'success-800': '#0b8209',
  'success-900': '#067005',

  'danger-50': '#f4e2e3',
  'danger-100': '#e3b7b9',
  'danger-200': '#d1888a',
  'danger-300': '#bf585b',
  'danger-400': '#b13438',
  'danger-500': '#a31015',
  'danger-600': '#9b0e12',
  'danger-700': '#910c0f',
  'danger-800': '#88090c',
  'danger-900': '#770506'
}

export const vars = createGlobalTheme(':root', {
  colors,
  font,
  shadow
})

export type ColorVariants = NonNullable<typeof colors>
