import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from '@storybook/router/node_modules/react-router'
import { render, RenderOptions } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import calendarStoreMock from '../mocks/calendarStore.mock'

const AllProviders: React.FC = ({ children }) => {
  const testStore = configureStore({
    ...calendarStoreMock
  })

  return (
    <Provider store={testStore}>
      <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
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
