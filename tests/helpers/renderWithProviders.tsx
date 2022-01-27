import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { configureStore } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import calendarStoreMock from '../mocks/calendarStore.mock'
import getPath from './getPath'

type AllProvidersProps = {
  apolloMocks?: Array<MockedResponse<Record<string, any>>>
}

export const AllProviders: React.FC<AllProvidersProps> = ({
  apolloMocks,
  children
}) => {
  const testStore = configureStore({
    reducer: { ...calendarStoreMock.reducer },
    preloadedState: { ...calendarStoreMock.preloadedState }
  })

  const path = getPath()

  return (
    <Provider store={testStore}>
      <MockedProvider mocks={apolloMocks}>
        <FormProvider>
          <MemoryRouter initialEntries={[path]}>
            <Routes>
              <Route path={path} element={children} />
            </Routes>
          </MemoryRouter>
        </FormProvider>
      </MockedProvider>
    </Provider>
  )
}

type RenderWithProvidersOptions = {
  apolloMocks?: Array<MockedResponse<Record<string, any>>>
} & RenderOptions

const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderWithProvidersOptions
) => {
  return render(
    <AllProviders apolloMocks={options?.apolloMocks}>{ui}</AllProviders>,
    {
      ...options
    }
  )
}

export default renderWithProviders
