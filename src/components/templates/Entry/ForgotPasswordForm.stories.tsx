import { MockedProvider } from '@apollo/client/testing'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { screen, userEvent, fireEvent, within } from '@storybook/testing-library'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { ForgotPasswordDocument, SendRecoverPasswordEmailDocument } from '@/services/api'
import FormProvider from '@/context/models/form/form.provider'
import ForgotPasswordForm from './ForgotPasswordForm'

const emailValue = 'any@email.com'
const sendRecoverPasswordEmailValue = 'any message'

export default {
  title: 'templates/Entry/ForgotPasswordForm',
  component: ForgotPasswordForm,
  decorators: [
    (story) => (
      <MockedProvider
        mocks={[
          {
            request: {
              query: ForgotPasswordDocument,
              variables: {
                email: emailValue
              }
            },
            result: {
              data: {
                forgotPassword: {
                  user: {
                    personal: {
                      email: emailValue,
                      id: 'any id',
                      name: 'any name'
                    },
                    settings: {
                      currency: 'BRL'
                    }
                  }
                }
              }
            }
          },
          {
            request: {
              query: SendRecoverPasswordEmailDocument,
              variables: {
                email: emailValue
              }
            },
            result: {
              data: {
                sendRecoverPasswordEmail: {
                  message: sendRecoverPasswordEmailValue
                }
              }
            }
          }
        ]}
        addTypename={false}
      >
        <FormProvider>
          <MemoryRouter>
            <Routes>
              <Route path="/" element={story()} />
            </Routes>
          </MemoryRouter>
        </FormProvider>
      </MockedProvider>
    )
  ]
} as ComponentMeta<typeof ForgotPasswordForm>

const Template: ComponentStory<typeof ForgotPasswordForm> = (args) => <ForgotPasswordForm {...args} />

export const Default = Template.bind({})

export const WithError = Template.bind({})
WithError.play = async () => {
  const email = screen.getAllByTestId('base-input')[0]

  await userEvent.click(email)
  fireEvent.submit(screen.getByTestId('form'))
}

export const WithSuccess = Template.bind({})
WithSuccess.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const email = canvas.getAllByTestId('base-input')[0]
  await userEvent.click(email)
  await userEvent.type(email, emailValue)
  fireEvent.submit(canvas.getByTestId('form'))

  await new Promise((resolve) => setTimeout(resolve, 30))
}
