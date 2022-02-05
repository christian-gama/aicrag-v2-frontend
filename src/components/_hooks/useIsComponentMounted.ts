import { useEffect, useState } from 'react'

export const useIsComponentMounted = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  return { isMounted }
}
