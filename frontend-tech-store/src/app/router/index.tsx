import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.tsx";

export function AppRouter() {
  const routing = useRoutes(routes);

  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      {routing}
    </Suspense>
  );
}
