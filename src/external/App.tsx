import { useMailerCountdown } from '@/components/_hooks'
import { Popover } from '@/components/molecules/Popover'
import { Center } from '@/components/utils/Center'
import { LoadingSpinnerIcon } from '@/components/utils/icons'
import { useGetMeQuery } from './graphql/generated'
import { usePopoverVar, popoverVar } from './graphql/reactiveVars'
import { Router } from './routes'

export const App = () => {
  const { isOpen, message, type } = usePopoverVar()
  const { loading } = useGetMeQuery()
  useMailerCountdown()

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
