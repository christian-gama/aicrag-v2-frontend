import { createGlobalTheme } from '@vanilla-extract/css'

const shadow = {
  light: '1px 3px 5px rgba(0, 0, 0, 0.2)',
  dark: '1px 3px 5px rgba(0, 0, 0, 0.4)'
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
  transparent: 'transparent',

  text: {
    dark: '#262A2C',
    default: '#363A3C',
    light: '#7A7D7F',
    placeholder: '#ADB1B5'
  },

  'primary-400': '#00587A',
  'primary-600': '#0B2D55',
  'primary-900': '#062340',

  'secondary-100': '#22A2AB',
  'secondary-300': '#008891',
  'secondary-700': '#046066',

  'tertiary-100': '#FAFAF5',
  'tertiary-200': '#F7F7F2',
  'tertiary-300': '#F5F5EF',

  'gray-50': '#F7F8FA',
  'gray-100': '#F0F1F5',
  'gray-200': '#E8E8ED',
  'gray-300': '#DFE1E6',
  'gray-400': '#D2D4D9',
  'gray-500': '#BCC0C4',
  'gray-600': '#9FA3A7',
  'gray-700': '#7D7F83',
  'gray-800': '#5B5F63',
  'gray-900': '#3C3E42',

  'info-50': '#EBF1FF',
  'info-100': '#C7D8FF',
  'info-200': '#83A8FC',
  'info-300': '#3069F0',
  'info-400': '#103CA3',
  'info-500': '#071F57',

  'success-50': '#E9FCE8',
  'success-100': '#C9FFC7',
  'success-200': '#85F781',
  'success-300': '#34E62E',
  'success-400': '#149E10',
  'success-500': '#095706',

  'danger-50': '#FFEBEC',
  'danger-100': '#FFC7C9',
  'danger-200': '#FC8387',
  'danger-300': '#F03036',
  'danger-400': '#A31015',
  'danger-500': '#570A0D'
}

export const vars = createGlobalTheme(':root', {
  colors,
  font,
  shadow
})
