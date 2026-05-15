import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'

import ButtonsPage from './pages/Buttons.page'
import App from './App'
import TypographyPage from './pages/Typography.page'
import InputFieldsPage from './pages/InputFields.page'
import IconsPage from './pages/Icons.page'
const iconsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/icons',
  component: IconsPage,
})
const buttonsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/buttons',
  component: ButtonsPage,
})
const typographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/typography',
  component: TypographyPage,
})
const inputFieldsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/input-fields',
  component: InputFieldsPage,
})
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  buttonsRoute,
  typographyRoute,
  inputFieldsRoute,
  iconsRoute,
])

// typed routes
type AppRoutes =
  | typeof buttonsRoute
  | typeof indexRoute
  | typeof typographyRoute
  | typeof inputFieldsRoute
  | typeof iconsRoute


export type RouteTo = AppRoutes["fullPath"]