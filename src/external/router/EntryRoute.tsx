import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from '@/components/views/Entry/SignIn'
import SignUp from '@/components/views/Entry/SignUp'

export default (
  <Route path="/entry">
    <Route path="sign-in" element={<SignIn />} />
    <Route path="sign-up" element={<SignUp />} />
  </Route>
)
