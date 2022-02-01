import { Pin } from '@/components/organisms/Pin'

export const ConfirmEmailView: React.FC = () => {
  return (
    <div data-testid="confirm-email-view">
      <Pin isPage to="/entry/sign-in" />
    </div>
  )
}
