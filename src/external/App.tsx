import { useEffect } from 'react'
import { useMailerCountdown } from '@/components/_hooks'
import { Popover } from '@/components/molecules/Popover'
import { Center } from '@/components/utils/Center'
import { LoadingSpinnerIcon } from '@/components/utils/icons'
import { useGetAuthenticationQuery } from './graphql/generated'
import { usePopoverVar, popoverVar, authVar } from './graphql/reactiveVars'
import { Router } from './routes'

export const App = () => {
  const { isOpen, message, type } = usePopoverVar()
  const { loading, data } = useGetAuthenticationQuery()
  useMailerCountdown()

  useEffect(() => {
    if (data?.getAuthentication.authentication === 'none') {
      authVar.logout()
    }

    if (data?.getAuthentication.authentication === 'partial') {
      authVar.partialLogin()
    }

    if (data?.getAuthentication.authentication === 'protected') {
      authVar.login()
    }
  }, [data])

  if (loading) {
    return (
      <Center>
        <LoadingSpinnerIcon style={{ size: 'lg' }} />
      </Center>
    )
  }

  return (
    <>
      <Router />

      <Popover
        type={type}
        isOpen={isOpen}
        message={message ?? ''}
        onClose={() => {
          popoverVar.onClose?.()
          popoverVar.reset()
        }}
      />
    </>
  )
}
