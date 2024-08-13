import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { authRoutes } from "./routes/auth-routes";
import { routePaths } from "@/constants/route-paths";
import { unauthRoutes } from "./routes/unauth-routes";
const routes: RouteObject[] = [
  {
    path: routePaths.Root,
    lazy: async () =>
      await import("@/app").then((m) => ({
        Component: m.default,
      })),
    children: [
      {
        element: (
          // Sample unauth routes.
          // This could be a layout provider or a guard wrapper etc etc.
          <div>
            <h1>[using unauth layout]</h1>
            <Outlet />
          </div>
        ),
        children: [...unauthRoutes],
      },
      {
        element: (
          // Sample auth routes.
          // This could be a layout provider or a guard wrapper etc etc.
          <div>
            <h1>[using auth layout]</h1>
            <Outlet />
          </div>
        ),
        children: [...authRoutes],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
