import { RouteObject } from "react-router-dom";
import { routePaths } from "../../constants/route-paths";

export const unauthRoutes: RouteObject[] = [
  {
    index: true,
    path: routePaths.Root,
    lazy: async () =>
      await import("@/pages/homepage").then((m) => ({
        Component: m.default,
      })),
  },
  {
    path: routePaths.Login,
    lazy: async () =>
      await import("@/pages/login").then((m) => ({
        Component: m.default,
      })),
  },
];
