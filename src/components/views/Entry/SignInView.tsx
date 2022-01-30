import { FormProvider } from '@/context/models/form'
import { Sign, SignIn } from '@/components/templates/Entry'

export const SignInView: React.FC = () => {
  return (
    <div data-testid="sign-in-view">
      <Sign>
        <FormProvider>
          <SignIn />
        </FormProvider>
      </Sign>
    </div>
  )
}
