import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '@/components/views/Entry/SignIn'
import SignUp from '@/components/views/Entry/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/entry/sign-in" element={<SignIn />} />
        <Route path="/entry/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
