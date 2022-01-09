import React from 'react'
import SignUpForm from '@/components/templates/forms/SignUpForm'
import FormProvider from '@/application/models/context/form/FormProvider'
import WelcomeCard from '../../../../components/templates/WelcomeCard/WelcomeCard'

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
