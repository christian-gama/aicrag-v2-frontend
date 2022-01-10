import React from 'react'
import FormProvider from '@/context/models/form/form.provider'
import SignUpForm from '@/components/templates/Entry/SignUpForm'
import EntryCard from '../../templates/Entry/EntryCard'

const SignUp: React.FC = () => {
  return (
    <div data-testid="sign-up">
      <EntryCard>
        <FormProvider>
          <SignUpForm />
        </FormProvider>
      </EntryCard>
    </div>
  )
}

export default SignUp
