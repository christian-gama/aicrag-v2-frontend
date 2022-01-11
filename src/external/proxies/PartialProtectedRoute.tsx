import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../graphql/reactiveVars/auth'

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isPartiallyAuthenticated } = useAuth()

  return !isAuthenticated && isPartiallyAuthenticated ? <Outlet /> : <Navigate to="/entry/sign-in" />
}

export default ProtectedRoute
