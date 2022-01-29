import { FormProvider } from '@/context/models/form'
import { EntryCard, SignInForm } from '@/components/templates/Entry'

export const SignIn: React.FC = () => {
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
