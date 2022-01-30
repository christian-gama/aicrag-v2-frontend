import { FormProvider } from '@/context/models/form'
import { ForgotPassword, EntryCard } from '@/components/templates/Entry'

export const ForgotPasswordView: React.FC = () => {
  return (
    <div data-testid="forgot-password-view">
      <EntryCard style={{ height: '40rem' }}>
        <FormProvider>
          <ForgotPassword />
        </FormProvider>
      </EntryCard>
    </div>
  )
}
