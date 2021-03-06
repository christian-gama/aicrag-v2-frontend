import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  boxSizing: 'border-box'
})

globalStyle(
  `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video`,
  {
    margin: '0',
    border: '0',
    padding: '0',
    verticalAlign: 'baseline',
    font: 'inherit',
    fontSize: '100%'
  }
)

globalStyle('html', {
  lineHeight: '1.5',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '10px'
})

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  {
    display: 'block'
  }
)

globalStyle('ol, ul', {
  listStyle: 'none'
})

globalStyle('blockquote, q', {
  quotes: 'none'
})

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: 'none'
})

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: '0'
})
