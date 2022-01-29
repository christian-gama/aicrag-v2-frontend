import { Routes, Route } from 'react-router-dom'
import {
  ForgotPassword,
  SignIn,
  SignUp,
  ResetPassword
} from '@/components/views/Entry'
import { NotFound } from '@/components/views/NotFound'
import { ProtectedRoute, MustLogoutRoute } from '../proxies'

export const Router = () => {
  return (
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
  )
}
