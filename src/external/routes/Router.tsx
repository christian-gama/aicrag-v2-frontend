import { Routes, Route, Navigate } from 'react-router-dom'
import {
  AccountDataView,
  AccountSecurityView
} from '@/components/views/Account'
import {
  ForgotPasswordView,
  SignInView,
  SignUpView,
  ResetPasswordView,
  ConfirmEmailView
} from '@/components/views/Entry'
import { FormatView } from '@/components/views/Format'
import { InvoiceView } from '@/components/views/Invoice'
import { InvoiceDetailsView } from '@/components/views/InvoiceDetails'
import { NewTaskView } from '@/components/views/NewTask'
import { NotFound } from '@/components/views/NotFound'
import { UpdateTaskView } from '@/components/views/UpdateTask'
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

        <Route path="/account">
          <Route path="" element={<Navigate to={'/account/data'} />} />
          <Route path="data" element={<AccountDataView />} />
          <Route path="security" element={<AccountSecurityView />} />
        </Route>

        <Route path="invoice">
          <Route path="" element={<InvoiceView />} />
          <Route path=":year/:month" element={<InvoiceDetailsView />} />
          <Route path="task/:id" element={<UpdateTaskView />} />
        </Route>

        <Route path="/format-text" element={<FormatView />} />
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
