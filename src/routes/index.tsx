import { Navigate, Route, Routes } from 'react-router-dom'

import { ProtectedRouter } from './ProtectedRouter'

import { useScrollToTop } from 'hooks/useScrollToTop'
import { E_Routes } from 'models/routes'
import * as Page from 'pages'

export const AppRoutes = () => {
  useScrollToTop()

  return (
    <Routes>
      <Route element={<ProtectedRouter />}>
        <Route path={E_Routes.events} element={<Page.Events />} />
      </Route>
      <Route path='*' element={<Navigate to={E_Routes.events} />} />
    </Routes>
  )
}
