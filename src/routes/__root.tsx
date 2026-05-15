import { createRootRoute, Outlet } from '@tanstack/react-router'
import { DaNavbar } from '../components/ui/navbar/DaNavbar'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <DaNavbar />
      <Outlet />
    </>
  )
}