import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import Login from "./pages/Login"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path='/login' element={<Login />} />
      <Route path="/tasks" element={<Dashboard />} />
      <Route path="/tasks/createtask" element={<CreateTask />} />
    </Routes>
  );
};

export default App;
