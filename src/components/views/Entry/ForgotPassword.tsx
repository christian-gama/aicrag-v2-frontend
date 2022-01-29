import { FormProvider } from '@/context/models/form'
import {
  ForgotPasswordCard,
  ForgotPasswordForm
} from '@/components/templates/Entry'

export const ForgotPassword: React.FC = () => {
  return (
    <div data-testid="sign-in">
      <ForgotPasswordCard>
        <FormProvider>
          <ForgotPasswordForm />
        </FormProvider>
      </ForgotPasswordCard>
    </div>
  )
}
