import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../graphql/reactiveVars/authVar'

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isPartiallyAuthenticated } = useAuth()

  return !isAuthenticated && isPartiallyAuthenticated
    ? (
    <Outlet />
      )
    : (
    <Navigate replace to="/entry/sign-in" />
      )
}

export default ProtectedRoute
