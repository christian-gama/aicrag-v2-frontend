import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import SignInForm from '../../templates/Welcome/SignInForm'
import WelcomeCard from '../../templates/Welcome/WelcomeCard'

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
