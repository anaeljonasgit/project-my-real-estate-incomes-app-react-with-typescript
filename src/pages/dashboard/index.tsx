import "./style.css";

import { useUser } from "../../contexts/user";

const DashboardPage = () => {
  const { setUser } = useUser();

  return <h1 onClick={() => setUser(null)}>DashboardPage</h1>;
};

export default DashboardPage;
