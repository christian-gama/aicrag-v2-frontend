import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Popover from '@/components/molecules/Popover'
import ForgotPassword from '@/components/views/Entry/ForgotPassword'
import SignIn from '@/components/views/Entry/SignIn'
import SignUp from '@/components/views/Entry/SignUp'
import { useGetMeQuery } from '@/external/graphql/generated'
import { popoverVar, usePopoverVar } from './graphql/reactiveVars/popoverVar'
import MustLogoutRoute from './proxies/MustLogoutRoute'
import ProtectedRoute from './proxies/ProtectedRoute'

const App = () => {
  const { isOpen, message, type } = usePopoverVar()
  useGetMeQuery()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/entry" element={<MustLogoutRoute />}>
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>

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
