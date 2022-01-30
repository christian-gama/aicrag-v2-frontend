import { FormProvider } from '@/context/models/form'
import { Sign, SignUp } from '@/components/templates/Entry/'

export const SignUpView: React.FC = () => {
  return (
    <div data-testid="sign-up">
      <Sign>
        <FormProvider>
          <SignUp />
        </FormProvider>
      </Sign>
    </div>
  )
}
