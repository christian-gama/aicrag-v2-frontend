import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import sleep from '@/tests/helpers/sleep'
import verifyResetPasswordTokenMock from '@/tests/mocks/queries/verifyResetPasswordToken.mock'
import ResetPassword from '../ResetPassword'

describe('ResetPassword', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', async () => {
    renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })

    await act(async () => {
      await sleep()
    })

    const button = screen.getByRole('button', {
      name: /resetar senha/i
    })

    expect(button).toBeInTheDocument()
  })
})
