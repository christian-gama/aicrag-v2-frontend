import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

export const invoiceDetailsType = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem',
    borderRadius: '50%',
    width: '3.2rem',
    height: '3.2rem',
    color: vars.colors.white,
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize,
    fontWeight: 'bold',

    ':hover': {
      cursor: 'default'
    }
  },

  variants: {
    type: {
      TX: {
        backgroundColor: '#EE6352'
      },

      QA: {
        backgroundColor: ' #35A2D4'
      }
    }
  }
})

export const invoiceDetailsActionCell = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '3.6rem'
})

export const invoiceDetailsTypeModal = style({
  display: 'flex',
  position: 'absolute',
  top: '-2.2rem',
  left: '1.6rem',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'scale(0)',
  transition: 'all 0.08s ease-in-out',
  opacity: '0',
  zIndex: '2',
  backgroundColor: vars.colors.black,
  padding: '0rem 0.6rem 1rem 0.6rem',
  width: '12rem',
  height: '4rem',
  overflow: 'hidden',
  color: vars.colors.white,
  clipPath:
    'polygon(0% 0%, 100% 0%, 100% 75%, 25% 75%, 8% 100%, 9% 75%, 0% 75%)',

  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${invoiceDetailsType()}:hover &`]: {
          transform: 'scale(1)',
          opacity: '0.82',
          overflow: 'visible'
        }
      }
    }
  }
})

export const invoiceDetailsTrash = style({
  cursor: 'pointer'
})
