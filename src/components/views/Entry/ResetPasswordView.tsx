import { FormProvider } from '@/context/models/form'
import { ResetPassword, EntryCard } from '@/components/templates/Entry'

export const ResetPasswordView: React.FC = () => {
  return (
    <div data-testid="reset-password-view">
      <EntryCard style={{ height: '48rem' }}>
        <FormProvider>
          <ResetPassword />
        </FormProvider>
      </EntryCard>
    </div>
  )
}
