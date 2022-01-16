import { MockedProvider } from '@apollo/client/testing'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import SignUpForm from './SignUpForm'

export default {
  title: 'templates/Entry/SignUpForm',
  component: SignUpForm,
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
} as ComponentMeta<typeof SignUpForm>

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm {...args} />

export const Default = Template.bind({})

export const WithError = Template.bind({})
WithError.play = async () => {
  const name = screen.getAllByTestId('base-input')[0]
  const email = screen.getAllByTestId('base-input')[1]
  const password = screen.getAllByTestId('base-input')[2]
  const passwordConfirmation = screen.getAllByTestId('base-input')[3]

  await userEvent.click(name)
  await userEvent.click(email)
  await userEvent.click(password)
  await userEvent.click(passwordConfirmation)
  await userEvent.click(screen.getByTestId('submit-button'))
}

export const WithSuccess = Template.bind({})
WithSuccess.play = async () => {
  const name = screen.getAllByTestId('base-input')[0]
  const email = screen.getAllByTestId('base-input')[1]
  const password = screen.getAllByTestId('base-input')[2]
  const passwordConfirmation = screen.getAllByTestId('base-input')[3]

  await userEvent.click(name)
  await userEvent.type(name, '_valid name', { delay: 100 })
  await userEvent.click(email)
  await userEvent.type(email, 'valid@email.com', { delay: 100 })
  await userEvent.click(password)
  await userEvent.type(password, 'validpassword', { delay: 100 })
  await userEvent.click(passwordConfirmation)
  await userEvent.type(passwordConfirmation, 'validpassword', { delay: 100 })

  await userEvent.click(screen.getByTestId('submit-button'))
}
