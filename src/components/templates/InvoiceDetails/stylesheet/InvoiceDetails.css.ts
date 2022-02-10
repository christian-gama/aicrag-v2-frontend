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
    width: '3.4rem',
    height: '3.4rem',
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize,
    color: vars.colors.white,
    fontWeight: 'bold'
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

export const invoiceDetailsTrash = style({
  cursor: 'pointer'
})
