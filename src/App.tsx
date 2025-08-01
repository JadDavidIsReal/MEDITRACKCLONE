import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/AppLayout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/nurse/*" element={<AppLayout />} />
        <Route path="/doctor/*" element={<AppLayout />} />
        <Route path="/patient/*" element={<AppLayout />} />
        <Route path="/search" element={<AppLayout />} />
        <Route path="/stocks" element={<AppLayout />} />
        <Route path="/history" element={<AppLayout />} />
        <Route path="/reports" element={<AppLayout />} />
        <Route path="/chat" element={<AppLayout />} />
        <Route path="/appointment" element={<AppLayout />} />
        <Route path="/about" element={<AppLayout />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;