import { useEffect, useState } from 'react'
import { useAuth } from '@/external/graphql/reactiveVars'
import { getBrlFromUsd } from '@/external/vendors/getBrlFromUsd'

export const useGetTaskValue = (value: number) => {
  const { user } = useAuth()
  const [taskValue, setTaskValue] = useState(value)
  const [BRLQuote, setBRLQuote] = useState(5)

  const currency = user.settings.currency

  const getTaskValue = (value?: number) => {
    if (currency === 'BRL') {
      return +(BRLQuote * (value ?? taskValue)).toFixed(2)
    }

    return +(value ?? taskValue).toFixed(2)
  }

  useEffect(() => {
    setTaskValue(getTaskValue())
  }, [BRLQuote])

  useEffect(() => {
    getBrlFromUsd()
      .then((brlQuote) => setBRLQuote(brlQuote))
      .catch(() => setBRLQuote(5))
  }, [])

  return { taskValue, currency, getTaskValue }
}
