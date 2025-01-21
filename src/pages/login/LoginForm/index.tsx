import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import Card from "../../../components/Card";
import MainButton from "../../../components/Buttons/MainButton";

import { apiUsersService } from "../../../services/api/users";

import { useUser } from "../../../contexts/user";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { setUser } = useUser();

  let abortController: AbortController | null = null;

  useEffect(() => {
    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, []);

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    abortController = new AbortController();

    if (!email || !password)
      return alert("Please, insert e-mail and password to continue.");

    const user = await apiUsersService.login(
      { email, password },
      abortController.signal
    );

    if (user.email) {
      setUser({
        name: user.name,
        email: user.email,
      });

      return navigate("/dashboard");
    }

    return alert("E-mail or password invalid.");
  };

  return (
    <Card>
      <div className="LoginFormContainer">
        <form className="LoginForm" onSubmit={handleLoginSubmit}>
          <h3>My Real Estate Incomes</h3>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <MainButton type="submit">Login</MainButton>
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;
