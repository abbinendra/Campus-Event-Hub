import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import NewUser from "./pages/Newuser.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import CollegeDashboard from "./pages/CollegeDashboard.jsx";
import EventDetails from "./pages/EventDetails.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<NewUser />} />
        <Route path="/student-dashboard/*" element={<StudentDashboard />} />
        <Route path="/college-dashboard" element={<CollegeDashboard />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}