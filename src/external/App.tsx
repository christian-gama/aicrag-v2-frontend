import React from 'react'
import { Route, Routes } from 'react-router-dom'
import useMailerCountdown from '@/components/_hooks/useMailerCountdown'
import Popover from '@/components/molecules/Popover'
import Center from '@/components/utils/Center'
import LoadingSpinnerIcon from '@/components/utils/icons/LoadingSpinnerIcon'
import ForgotPassword from '@/components/views/Entry/ForgotPassword'
import ResetPassword from '@/components/views/Entry/ResetPassword'
import SignIn from '@/components/views/Entry/SignIn'
import SignUp from '@/components/views/Entry/SignUp'
import NotFound from '@/components/views/NotFound'
import { useGetMeQuery } from '@/external/graphql/generated'
import { popoverVar, usePopoverVar } from './graphql/reactiveVars/popoverVar'
import MustLogoutRoute from './proxies/MustLogoutRoute'
import ProtectedRoute from './proxies/ProtectedRoute'

const App = () => {
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
      <Routes>
        <Route path="/" element={<ProtectedRoute />} />

        <Route path="/entry" element={<MustLogoutRoute />}>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

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

export default App
