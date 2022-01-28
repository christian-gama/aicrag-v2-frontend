import React from 'react'
import { useParams } from 'react-router-dom'
import ControlForm from '@/components/organisms/Control/ControlForm'
import { useVerifyResetPasswordTokenQuery } from '@/external/graphql/generated'

const ResetPasswordForm: React.FC = () => {
  const params = useParams()

  const { token } = params
  const { data } = useVerifyResetPasswordTokenQuery({
    variables: {
      token
    }
  })

  return data
    ? (
    <div data-testid="reset-password">
      <ControlForm submitHandler={async () => {}}>
        {`${token!} token`}
      </ControlForm>
    </div>
      )
    : null
}

export default ResetPasswordForm
