import React from 'react'
import FormProvider from '@/application/models/context/form/FormProvider'
import SignUpForm from '@/presentation/components/layout/Welcome/SignUpForm'
import WelcomeCard from '../../../components/layout/Welcome/WelcomeCard/WelcomeCard'

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
