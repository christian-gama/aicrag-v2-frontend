import { configureStore } from '@reduxjs/toolkit'
import { queries, render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import React, { Reducer } from 'react'
import { Provider } from 'react-redux'

interface Options<T extends Record<string, string>> extends RenderOptions<typeof queries, HTMLElement> {
  preloadedState?: T
  reducer: Reducer<any, any>
}

const render = <PreloadedState extends Record<string, any>>(
  ui: JSX.Element,
  options: Options<PreloadedState>
): RenderResult<typeof queries, HTMLElement> => {
  const { preloadedState, reducer, ...renderOptions } = options

  const testStore = configureStore({
    preloadedState,
    reducer
  })

  return rtlRender(<Provider store={testStore}>{ui}</Provider>, renderOptions)
}

export default render
