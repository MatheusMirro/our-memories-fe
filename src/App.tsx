import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Hero from "./pages/Hero/Hero";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { useState } from "react";
import EditProfile from "./components/Profile/Profile";

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>{isLoggedIn ? <Hero /> : <Signin />}</RequireAuth>
        }
      />

      <Route
        path="/:username"
        element={
          <RequireAuth>{isLoggedIn ? <EditProfile /> : <Signin />}</RequireAuth>
        }
      />

      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}
export default App;
