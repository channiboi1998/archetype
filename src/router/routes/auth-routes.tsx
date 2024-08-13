import { RouteObject } from "react-router-dom";
import { routePaths } from "../../constants/route-paths";

export const authRoutes: RouteObject[] = [
  {
    index: true,
    path: routePaths.Dashboard,
    lazy: async () =>
      await import("@/pages/dashboard").then((m) => ({
        Component: m.default,
      })),
  },
];
