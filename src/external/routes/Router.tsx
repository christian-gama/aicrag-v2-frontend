import { Routes, Route } from 'react-router-dom'
import {
  ForgotPasswordView,
  SignInView,
  SignUpView,
  ResetPasswordView,
  ConfirmEmailView
} from '@/components/views/Entry'
import { NotFound } from '@/components/views/NotFound'
import { ProtectedRoute, MustLogoutRoute } from '../proxies'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />} />

      <Route path="/entry" element={<MustLogoutRoute />}>
        <Route path="forgot-password" element={<ForgotPasswordView />} />
        <Route path="sign-in" element={<SignInView />} />
        <Route path="sign-up" element={<SignUpView />} />
        <Route path="reset-password/:token" element={<ResetPasswordView />} />
        <Route path="confirm-account" element={<ConfirmEmailView />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
