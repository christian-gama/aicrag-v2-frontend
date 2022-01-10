import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '@/components/views/Entry/SignIn'
import SignUp from '@/components/views/Entry/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes location={'/entry'}>
        <Route></Route>
        <Route path="/entry">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
