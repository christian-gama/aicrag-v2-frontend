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
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize,
    color: vars.colors.white,
    fontWeight: 'bold'
  },

  variants: {
    type: {
      TX: {
        backgroundColor: '#a16e00'
      },

      QA: {
        backgroundColor: '#bf19b1'
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
