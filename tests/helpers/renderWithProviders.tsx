import { configureStore } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import calendarStoreMock from '../mocks/calendarStore.mock'

const AllProviders: React.FC = ({ children }) => {
  const testStore = configureStore({
    reducer: { ...calendarStoreMock.reducer },
    preloadedState: { ...calendarStoreMock.preloadedState }
  })

  return (
    <Provider store={testStore}>
      <FormProvider>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={children} />
          </Routes>
        </MemoryRouter>
      </FormProvider>
    </Provider>
  )
}

const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  return render(ui, { wrapper: AllProviders, ...options })
}

export default renderWithProviders
