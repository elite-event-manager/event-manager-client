import { Outlet } from 'react-router-dom'

import { AppLayout, AuthLayout } from 'Layouts'

export const ProtectedRouter = () => {
  const isAuth = false

  return <AppLayout>{isAuth ? <Outlet /> : <AuthLayout />}</AppLayout>
}
