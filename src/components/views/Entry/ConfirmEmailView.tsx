import { Background } from '@/components/atoms/Background'
import { Pin } from '@/components/organisms/Pin'

export const ConfirmEmailView: React.FC = () => {
  return (
    <div data-testid="confirm-email-view">
      <Background gradient>
        <Pin isPage to="/entry/sign-in" />
      </Background>
    </div>
  )
}
