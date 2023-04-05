import React from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ListUsers from "./pages/ListUsers";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<ListUsers />} />
      </Routes>
    </div>
  );
};

export default App;
