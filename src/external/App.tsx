import { useEffect } from 'react'
import { Popover } from '@/components/molecules/Popover'
import { Center } from '@/components/utils/Center'
import { LoadingSpinnerIcon } from '@/components/utils/icons'
import { useGetAuthenticationQuery } from './graphql/generated'
import { usePopoverVar, popoverVar, authVar } from './graphql/reactiveVars'
import { Router } from './routes'

export const App = () => {
  const { isOpen, message, type } = usePopoverVar()
  const { loading, data } = useGetAuthenticationQuery()

  useEffect(() => {
    if (data) {
      const typeName = data.getAuthentication.__typename

      if (typeName === 'GetAuthenticationNone') {
        authVar.logout()
      }

      if (typeName === 'GetAuthenticationPartial') {
        authVar.partialLogin()
      }

      if (typeName === 'GetAuthenticationProtected') {
        authVar.login(data.getAuthentication.user)
      }
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
