import { Navigate } from "react-router-dom";
// import { useAppSelector } from "@/shared/lib/hooks/redux";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
//   const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isAuth = true;


  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
