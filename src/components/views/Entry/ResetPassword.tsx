import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import ResetPasswordCard from '@/components/templates/Entry/ResetPasswordCard'
import ResetPasswordForm from '@/components/templates/Entry/ResetPasswordForm'

const ResetPassword: React.FC = () => {
  return (
    <div data-testid="reset-password">
      <ResetPasswordCard>
        <FormProvider>
          <ResetPasswordForm />
        </FormProvider>
      </ResetPasswordCard>
    </div>
  )
}

export default ResetPassword
