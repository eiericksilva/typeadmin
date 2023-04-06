import React from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ListUsers from "./pages/ListUsers";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <ListUsers />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
