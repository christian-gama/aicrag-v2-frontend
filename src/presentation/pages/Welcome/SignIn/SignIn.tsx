import React from 'react'
import FormProvider from '@/application/models/context/form/FormProvider'
import SignInForm from '../../../../components/templates/forms/SignInForm'
import WelcomeCard from '../../../../components/templates/WelcomeCard/WelcomeCard'

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
