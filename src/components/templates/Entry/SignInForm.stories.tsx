import { MockedProvider } from '@apollo/client/testing'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import SignInForm from './SignInForm'

export default {
  title: 'templates/Entry/SignInForm',
  component: SignInForm,
  decorators: [
    (story: any) => (
      <MockedProvider>
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
} as ComponentMeta<typeof SignInForm>

const Template: ComponentStory<typeof SignInForm> = (args) => <SignInForm {...args} />

export const Default = Template.bind({})

export const WithError = Template.bind({})
WithError.play = async () => {
  const email = screen.getAllByTestId('base-input')[0]
  const password = screen.getAllByTestId('base-input')[1]

  await userEvent.click(email)
  await userEvent.click(password)
  await userEvent.click(screen.getByTestId('submit-button'))
}

export const WithSuccess = Template.bind({})
WithSuccess.play = async () => {
  const email = screen.getAllByTestId('base-input')[0]
  const password = screen.getAllByTestId('base-input')[1]

  await userEvent.click(email)
  await userEvent.type(email, '_valid@email.com', { delay: 100 })
  await userEvent.click(password)
  await userEvent.type(password, 'validpassword', { delay: 100 })
  await userEvent.click(screen.getByTestId('submit-button'))
}
