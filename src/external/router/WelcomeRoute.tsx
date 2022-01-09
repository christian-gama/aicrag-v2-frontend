import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from '@/components/views/Welcome/SignIn'
import SignUp from '@/components/views/Welcome/SignUp'

export default (
  <Route path="/boas-vindas">
    <Route path="entrar" element={<SignIn />} />
    <Route path="cadastrar" element={<SignUp />} />
  </Route>
)
