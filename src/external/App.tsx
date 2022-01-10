import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import WelcomeRoute from './router/WelcomeRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{WelcomeRoute}</Routes>
    </BrowserRouter>
  )
}

export default App
