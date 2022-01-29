import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ControlForm from '@/components/organisms/Control/ControlForm'
import Center from '@/components/utils/Center'
import LoadingSpinnerIcon from '@/components/utils/icons/LoadingSpinnerIcon'
import { useVerifyResetPasswordTokenQuery } from '@/external/graphql/generated'

const ResetPasswordForm: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { token } = params
  const { error, loading } = useVerifyResetPasswordTokenQuery({
    variables: {
      token
    }
  })

  if (error) navigate('/404')

  if (loading) {
    return (
      <Center>
        <LoadingSpinnerIcon style={{ size: 'lg' }} />
      </Center>
    )
  }

  return (
    <div data-testid="reset-password">
      <ControlForm submitHandler={async () => {}}></ControlForm>
    </div>
  )
}

export default ResetPasswordForm
