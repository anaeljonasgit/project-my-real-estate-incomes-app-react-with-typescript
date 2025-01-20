import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/login";

const App = () => {
  return (
    <div className="AppContainer">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="*" element={<Navigate to={"/login"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
