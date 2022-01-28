import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import ForgotPasswordForm from '@/components/templates/Entry/ForgotPasswordForm'
import PasswordCard from '@/components/templates/Entry/PasswordCard'

const ForgotPassword: React.FC = () => {
  return (
    <div data-testid="sign-in">
      <PasswordCard>
        <FormProvider>
          <ForgotPasswordForm />
        </FormProvider>
      </PasswordCard>
    </div>
  )
}

export default ForgotPassword
