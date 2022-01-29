import { FormProvider } from '@/context/models/form'
import { EntryCard, SignUpForm } from '@/components/templates/Entry'

export const SignUp: React.FC = () => {
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
