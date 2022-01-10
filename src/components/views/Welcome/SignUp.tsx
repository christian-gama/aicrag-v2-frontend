import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import SignUpForm from '@/components/templates/Welcome/SignUpForm'
import WelcomeCard from '../../templates/Welcome/WelcomeCard'

const SignUp: React.FC = () => {
  return (
    <div data-testid="sign-up">
      <WelcomeCard>
        <FormProvider>
          <SignUpForm />
        </FormProvider>
      </WelcomeCard>
    </div>
  )
}

export default SignUp
