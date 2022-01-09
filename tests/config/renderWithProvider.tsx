import { configureStore } from '@reduxjs/toolkit'
import { queries, render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import React, { Reducer } from 'react'
import { Provider } from 'react-redux'
import { RootState } from '@/context/store'

interface Options extends RenderOptions<typeof queries, HTMLElement> {
  preloadedState?: Partial<RootState>
  reducer: { [key: string]: Reducer<any, any> }
}

const render = (ui: JSX.Element, options: Options): RenderResult<typeof queries, HTMLElement> => {
  const { preloadedState, reducer, ...renderOptions } = options

  const testStore = configureStore({
    reducer,
    preloadedState
  })

  return rtlRender(<Provider store={testStore}>{ui}</Provider>, renderOptions)
}

export default render
