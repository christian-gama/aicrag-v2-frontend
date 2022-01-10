import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import EntryCard from '../../templates/Entry/EntryCard'
import SignInForm from '../../templates/Entry/SignInForm'

const SignIn: React.FC = () => {
  return (
    <div data-testid="sign-in">
      <EntryCard>
        <FormProvider>
          <SignInForm />
        </FormProvider>
      </EntryCard>
    </div>
  )
}

export default SignIn
