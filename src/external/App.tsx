import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import EntryRoute from './router/EntryRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{EntryRoute}</Routes>
    </BrowserRouter>
  )
}

export default App
