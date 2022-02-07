import { makeVar, useReactiveVar } from '@apollo/client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { InternalError } from '@/services/errors'
import { popoverVar } from '.'
import { GetAllInvoicesQuery, GetInvoiceByMonthQuery } from '../generated'

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
  }
}

export const useShouldRefetch = () => useReactiveVar(_refetchInvoiceVar)

type InvoiceType = 'invoice' | 'allInvoices'

type WhichInvoiceType<T extends InvoiceType> = T extends 'invoice'
  ? GetInvoiceByMonthQuery | undefined
  : GetAllInvoicesQuery | undefined

type InvoiceState<T extends InvoiceType> = [
  WhichInvoiceType<T>,
  Dispatch<SetStateAction<WhichInvoiceType<T>>>
]

export const useRefetchInvoice = <T extends InvoiceType>(
  type: T,
  refetch: () => Promise<any>
) => {
  const { shouldRefetch } = useShouldRefetch()
  const [invoiceData, setInvoiceData] = useState() as InvoiceState<T>

  useEffect(() => {
    if (shouldRefetch[type]) {
      refetch()
        .then((res) => setInvoiceData(res.data))
        .catch(() =>
          popoverVar.setPopover(new InternalError().message, 'error')
        )
    }

    refetchInvoiceVar.reset(type)
  }, [shouldRefetch[type]])

  return { invoiceData, setInvoiceData }
}
