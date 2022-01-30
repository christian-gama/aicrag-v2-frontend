import { FormProvider } from '@/context/models/form'
import { ForgotPassword, EntryCard } from '@/components/templates/Entry'

export const ForgotPasswordView: React.FC = () => {
  return (
    <div data-testid="sign-in">
      <EntryCard style={{ height: '40rem' }}>
        <FormProvider>
          <ForgotPassword />
        </FormProvider>
      </EntryCard>
    </div>
  )
}
