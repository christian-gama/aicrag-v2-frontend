import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const float = styleVariants({
  true: {
    backgroundColor: vars.colors.white,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '0px 4px',
    top: '0'
  },

  false: {
    fontWeight: 'normal',
    padding: '0',
    top: '50%',
    fontSize: vars.font.p.fontSize
  }
})
