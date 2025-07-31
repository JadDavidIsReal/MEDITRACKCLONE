import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Search/Student";
import Employee from "./pages/Search/Employee";
import Community from "./pages/Search/Community";
import InventDashboard from "./pages/Inventory/InventDashboard";
import Stocks from "./pages/Inventory/Stocks";
import History from "./pages/Inventory/History";
import Reports from "./pages/Reports";
import Print from "./pages/Print";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search/student" element={<Student />} />
        <Route path="/search/employee" element={<Employee />} />
        <Route path="/search/community" element={<Community />} />
        <Route path="/inventory/dashboard" element={<InventDashboard />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/inventory/stocks" element={<Stocks />} />
        <Route path="/inventory/history" element={<History />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/print" element={<Print />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;