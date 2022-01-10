import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import SignInForm from '../../templates/Welcome/SignInForm'
import WelcomeCard from '../../templates/Welcome/WelcomeCard'

const SignIn: React.FC = () => {
  return (
    <div data-testid="sign-in">
      <WelcomeCard>
        <FormProvider>
          <SignInForm />
        </FormProvider>
      </WelcomeCard>
    </div>
  )
}

export default SignIn
