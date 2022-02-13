import { makeVar, useReactiveVar } from '@apollo/client'
import { useEffect } from 'react'
import { InternalError } from '@/services/errors'
import { popoverVar } from '.'

const initialValue = {
  shouldRefetch: { invoice: false, allInvoices: false }
}

const _refetchInvoiceVar = makeVar(initialValue)

export const refetchInvoiceVar = {
  reset: (type: 'invoice' | 'allInvoices') => {
    const { shouldRefetch } = _refetchInvoiceVar()

    _refetchInvoiceVar({
      shouldRefetch: {
        allInvoices: !(type === 'allInvoices') ?? shouldRefetch.allInvoices,
        invoice: !(type === 'invoice') ?? shouldRefetch.invoice
      }
    })
  },

  refetch: () => {
    _refetchInvoiceVar({
      shouldRefetch: {
        allInvoices: true,
        invoice: true
      }
    })
  },

  get: () => {
    return _refetchInvoiceVar()
  }
}

export const useShouldRefetch = () => useReactiveVar(_refetchInvoiceVar)

export const useRefetchInvoice = (
  type: 'invoice' | 'allInvoices',
  refetch: () => Promise<any>
) => {
  const { shouldRefetch } = useShouldRefetch()

  useEffect(() => {
    if (shouldRefetch[type]) {
      refetch().catch(() =>
        popoverVar.setPopover(new InternalError().message, 'error')
      )
    }

    refetchInvoiceVar.reset(type)
  }, [shouldRefetch[type]])
}
