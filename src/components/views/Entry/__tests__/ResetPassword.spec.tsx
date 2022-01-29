import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import waitFetch from '@/tests/helpers/waitFetch'
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
    await waitFetch()
    const button = screen.getByRole('button', {
      name: /resetar senha/i
    })

    expect(button).toBeInTheDocument()
  })
})
