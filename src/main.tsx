import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import EditTask from "./pages/EditTask";
import registerServiceWorker from "./utils/registerServiceWorker";
import "./styles/theme";
  
registerServiceWorker();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/edit-task" element={<EditTask />}/>
      </Routes>
    </Router>

  </React.StrictMode>
);
