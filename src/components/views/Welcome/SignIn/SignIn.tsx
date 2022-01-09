import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import SignInForm from '../../../templates/forms/SignInForm'
import WelcomeCard from '../../../templates/WelcomeCard/WelcomeCard'

const SignIn: React.FC = () => {
  return (
    <WelcomeCard>
      <FormProvider>
        <SignInForm />
      </FormProvider>
    </WelcomeCard>
  )
}

export default SignIn
