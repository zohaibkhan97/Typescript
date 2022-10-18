import { lazy } from "react";

const appRoutes = [
  {
    path: "/",
    component: lazy(() => import("../../view/home")),
    layout: "AppLayout",
  },
  {
    path: "/home",
    component: lazy(() => import("../../view/home")),
    layout: "AppLayout",
  },
];

export default appRoutes;
