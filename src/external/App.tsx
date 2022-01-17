import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useGetMeQuery } from '@/services/api'
import Popover from '@/components/molecules/Popover'
import ForgotPassword from '@/components/views/Entry/ForgotPassword'
import SignIn from '@/components/views/Entry/SignIn'
import SignUp from '@/components/views/Entry/SignUp'
import { errorVar, useErrorVar } from './graphql/reactiveVars/errorVar'
import MustLogoutRoute from './proxies/MustLogoutRoute'
import ProtectedRoute from './proxies/ProtectedRoute'

const App = () => {
  const { isOpen, message } = useErrorVar()
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
        type="error"
        isOpen={isOpen}
        message={message ?? 'Algo deu errado, tente novamente mais tarde'}
        onClose={errorVar.reset}
      />
    </>
  )
}

export default App
