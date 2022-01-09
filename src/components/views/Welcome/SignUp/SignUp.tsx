import React from 'react'
import FormProvider from '@/context/models/form/FormProvider'
import SignUpForm from '@/components/templates/forms/SignUpForm'
import WelcomeCard from '../../../templates/WelcomeCard/WelcomeCard'

const SignUp: React.FC = () => {
  return (
    <WelcomeCard>
      <FormProvider>
        <SignUpForm />
      </FormProvider>
    </WelcomeCard>
  )
}

export default SignUp
