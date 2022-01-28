import React from 'react'
import ControlForm from '@/components/organisms/Control/ControlForm'

const ResetPasswordForm: React.FC = () => {
  const hasValidParam = true

  return (
    hasValidParam && (
      <div data-testid="reset-password">
        <ControlForm submitHandler={async () => {}}></ControlForm>
      </div>
    )
  )
}

export default ResetPasswordForm
