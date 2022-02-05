import { createGlobalTheme } from '@vanilla-extract/css'

const shadow = {
  xsm: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  sm: '0px 5px 10px rgba(0, 0, 0, 0.2)',
  md: '0px 12px 25px rgba(0, 0, 0, 0.1)',
  lg: '0px 10px 30px rgba(0, 0, 0, 0.3)'
}

const font = {
  h1: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '4.8rem',
    fontWeight: 'regular'
  },
  h2: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '3.2rem'
  },
  h3: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '2.8rem'
  },
  h4: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.8rem'
  },
  p: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.6rem'
  },
  button: {
    textTransform: 'uppercase',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.6rem'
  },
  hint: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.4rem'
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

  'gray-50': '#f5f6f6;',
  'gray-100': '#e6e8e9',
  'gray-200': '#d6d9db',
  'gray-300': '#c6c9cc',
  'gray-400': '#b9bec1',
  'gray-500': '#adb2b6',
  'gray-600': '#a6abaf',
  'gray-700': '#9ca2a6',
  'gray-800': '#93999e',
  'gray-900': '#838a8e',

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
  'danger-900': '#770506',

  'warning-50': '#FFF3E0',
  'warning-100': '#FFE0B3',
  'warning-200': '#FFCC80',
  'warning-300': '#FFB74D',
  'warning-400': '#FFA726',
  'warning-500': '#FF9800',
  'warning-600': '#FF9000',
  'warning-700': '#FF8500',
  'warning-800': '#FF7B00',
  'warning-900': '#FF6A00',

  gradient: 'linear-gradient(to bottom right, #0c7580 0%, #03112a 100%)'
}

export const vars = createGlobalTheme(':root', {
  colors,
  font,
  shadow
})

export type ColorVariants = NonNullable<typeof colors>
