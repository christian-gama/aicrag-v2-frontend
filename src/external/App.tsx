import { useEffect } from 'react'
import { getUserByToken } from '@/services/token/getUserByToken'
import { useMailerCountdown } from '@/components/_hooks'
import { Popover } from '@/components/molecules/Popover'
import { Center } from '@/components/utils/Center'
import { LoadingSpinnerIcon } from '@/components/utils/icons'
import { useGetAuthenticationQuery, useGetMeQuery } from './graphql/generated'
import { usePopoverVar, popoverVar, authVar } from './graphql/reactiveVars'
import { Router } from './routes'

export const App = () => {
  const { isOpen, message, type } = usePopoverVar()
  const { loading, data } = useGetAuthenticationQuery()
  const { data: getMeData, loading: loadingGetMe } = useGetMeQuery()
  useMailerCountdown()

  useEffect(() => {
    if (data?.getAuthentication.authentication === 'none') {
      authVar.logout()
    }

    if (data?.getAuthentication.authentication === 'partial') {
      authVar.partialLogin()
    }

    if (data?.getAuthentication.authentication === 'protected') {
      authVar.login({
        personal: {
          email:
            getMeData?.getMe.user.personal.email ?? getUserByToken('email')!,
          id: getMeData?.getMe.user.personal.id ?? getUserByToken('userId')!,
          name: getMeData?.getMe.user.personal.name ?? getUserByToken('name')!
        },
        settings: {
          currency:
            getMeData?.getMe.user.settings.currency ??
            getUserByToken('currency')!
        }
      })
    }
  }, [data, getMeData])

  if (loading || loadingGetMe) {
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
