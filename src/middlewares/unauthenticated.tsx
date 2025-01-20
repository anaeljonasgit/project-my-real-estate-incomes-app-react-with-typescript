import { Outlet, Navigate } from "react-router-dom";

import { useUser } from "../contexts/user";

const UnauthenticatedRoute = () => {
  const { user } = useUser();

  if (user?.email) return <Navigate to={"/"} />;

  return <Outlet />;
};

export default UnauthenticatedRoute;
