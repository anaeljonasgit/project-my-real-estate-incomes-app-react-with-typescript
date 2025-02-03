import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ErrorBoundary from "./errors/ErrorBoundary";

import { UserProvider } from "./contexts/user";

import UnauthenticatedRoute from "./middlewares/unauthenticated";
import AuthenticatedRoute from "./middlewares/authenticated";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";

const App = () => {
  return (
    <ErrorBoundary>
      <div className="AppContainer">
        <div className="App">
          <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<UnauthenticatedRoute />}>
                  <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route element={<AuthenticatedRoute />}>
                  <Route path="/" element={<DashboardPage />} />
                </Route>

                <Route path="*" element={<Navigate to={"/login"} />} />
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
