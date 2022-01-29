import { FormProvider } from '@/context/models/form'
import {
  ResetPasswordCard,
  ResetPasswordForm
} from '@/components/templates/Entry'

export const ResetPassword: React.FC = () => {
  return (
    <div data-testid="reset-password">
      <ResetPasswordCard>
        <FormProvider>
          <ResetPasswordForm />
        </FormProvider>
      </ResetPasswordCard>
    </div>
  )
}
