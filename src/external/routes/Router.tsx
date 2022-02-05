import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/templates/Layout'
import {
  ForgotPasswordView,
  SignInView,
  SignUpView,
  ResetPasswordView,
  ConfirmEmailView
} from '@/components/views/Entry'
import { NewTaskView } from '@/components/views/NewTask'
import { NotFound } from '@/components/views/NotFound'
import {
  ProtectedRoute,
  MustLogoutRoute,
  PartialProtectedRoute
} from '../proxies'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="" element={<NewTaskView />} />
        <Route
          path="account"
          element={
            <Layout pageName="Minha conta">
              <></>
            </Layout>
          }
        />
        <Route
          path="invoice"
          element={
            <Layout pageName="Faturas">
              <></>
            </Layout>
          }
        />
      </Route>

      <Route path="/entry" element={<MustLogoutRoute />}>
        <Route path="forgot-password" element={<ForgotPasswordView />} />
        <Route path="sign-in" element={<SignInView />} />
        <Route path="sign-up" element={<SignUpView />} />
        <Route path="reset-password/:token" element={<ResetPasswordView />} />
      </Route>

      <Route path="/confirm-email" element={<PartialProtectedRoute />}>
        <Route path="" element={<ConfirmEmailView />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
