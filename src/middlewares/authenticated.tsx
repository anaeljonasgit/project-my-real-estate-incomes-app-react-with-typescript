import { Outlet, Navigate } from "react-router-dom";

import { useUser } from "../contexts/user";

const AuthenticatedRoute = () => {
  const { user } = useUser();

  if (user?.email) return <Outlet />;

  return <Navigate to={"/login"} />;
};

export default AuthenticatedRoute;
