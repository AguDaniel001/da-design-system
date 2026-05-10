import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'

import ButtonsPage from './pages/Buttons.page'
import App from './App'
const buttonsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/buttons',
  component: ButtonsPage,
})
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

export const routeTree = rootRoute.addChildren([
  buttonsRoute,
])

// typed routes
type AppRoutes =
  | typeof buttonsRoute
  | typeof indexRoute

export type RouteTo = AppRoutes["fullPath"]