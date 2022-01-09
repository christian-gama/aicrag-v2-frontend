import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from '@/presentation/pages/Welcome/SignIn'
import SignUp from '@/presentation/pages/Welcome/SignUp'

export default (
  <Route path="/boas-vindas">
    <Route path="entrar" element={<SignIn />} />
    <Route path="cadastrar" element={<SignUp />} />
  </Route>
)
