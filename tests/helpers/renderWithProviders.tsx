import { MockedResponse, MockedProvider } from '@apollo/client/testing'
import { configureStore } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { FormProvider } from '@/context/models/form'
import { useMailerCountdown } from '@/components/_hooks'
import { waitFetch } from '.'
import { calendarStoreMock, mailerCountdownMock } from '../mocks'
import { filterStoreMock } from '../mocks/filterStore.mock'
import { getPath } from './getPath'

type AllProvidersProps = {
  apolloMocks?: Array<MockedResponse<Record<string, any>>>
}

export const AllProviders: React.FC<AllProvidersProps> = ({
  apolloMocks,
  children
}) => {
  const testStore = configureStore({
    reducer: {
      ...calendarStoreMock.reducer,
      ...mailerCountdownMock.reducer,
      ...filterStoreMock.reducer
    },
    preloadedState: {
      ...calendarStoreMock.preloadedState,
      ...mailerCountdownMock.preloadedState,
      ...filterStoreMock.preloadedState
    }
  })

  const path = getPath()

  return (
    <Provider store={testStore}>
      <MockedProvider mocks={apolloMocks}>
        <FormProvider>
          <MemoryRouter initialEntries={[path]}>
            <Routes>
              <Route
                element={<MailerCountdown>{children}</MailerCountdown>}
                path={path}
              />
            </Routes>
          </MemoryRouter>
        </FormProvider>
      </MockedProvider>
    </Provider>
  )
}

export const MailerCountdown: React.FC = ({ children }) => {
  useMailerCountdown()

  return <>{children}</>
}

type RenderWithProvidersOptions = {
  apolloMocks?: Array<MockedResponse<Record<string, any>>>
} & RenderOptions

export const renderWithProviders = async (
  ui: React.ReactElement,
  options?: RenderWithProvidersOptions
) => {
  const renderResult = render(
    <AllProviders apolloMocks={options?.apolloMocks}>{ui}</AllProviders>,
    {
      ...options
    }
  )

  await waitFetch()

  return renderResult
}
