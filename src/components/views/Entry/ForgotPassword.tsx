import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import ForgotPasswordCard from '@/components/templates/Entry/ForgotPasswordCard'
import ForgotPasswordForm from '@/components/templates/Entry/ForgotPasswordForm'

const ForgotPassword: React.FC = () => {
  return (
    <div data-testid="sign-in">
      <ForgotPasswordCard>
        <FormProvider>
          <ForgotPasswordForm />
        </FormProvider>
      </ForgotPasswordCard>
    </div>
  )
}

export default ForgotPassword
