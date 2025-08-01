import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Sidebar from './Sidebar';
import Header from './Header';

// Nurse Pages
import NurseDashboardPage from '../pages/nurse/NurseDashboardPage';
import SearchPage from '../pages/nurse/SearchPage';
import StocksPage from '../pages/nurse/StocksPage';
import HistoryPage from '../pages/nurse/HistoryPage';
import ReportsPage from '../pages/nurse/ReportsPage';
// Doctor Pages
import DoctorDashboardPage from '../pages/doctor/DoctorDashboardPage';
import ChatPage from '../pages/doctor/ChatPage';
// Patient Pages
import AppointmentPage from '../pages/patient/AppointmentPage';
import PatientProfilePage from '../pages/shared/PatientProfilePage';
// Shared Pages
import AboutPage from '../pages/AboutPage';

const AppLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);
  const userRole = localStorage.getItem('userRole') as 'nurse' | 'doctor' | 'patient' | null;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!userRole) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className={`fixed lg:static h-full z-20 bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} lg:w-64`}>
        {isSidebarOpen && <Sidebar role={userRole} />}
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            {/* Nurse Routes */}
            <Route element={<ProtectedRoute allowedRoles={['nurse']} />}>
              <Route path="nurse/dashboard" element={<NurseDashboardPage />} />
              <Route path="stocks" element={<StocksPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="reports" element={<ReportsPage />} />
            </Route>

            {/* Search Route for Nurse and Doctor */}
            <Route element={<ProtectedRoute allowedRoles={['nurse', 'doctor']} />}>
                <Route path="search" element={<SearchPage />} />
            </Route>

            {/* Doctor Routes */}
            <Route element={<ProtectedRoute allowedRoles={['doctor']} />}>
              <Route path="doctor/dashboard" element={<DoctorDashboardPage />} />
              <Route path="chat" element={<ChatPage />} />
            </Route>

            {/* Patient Routes */}
            <Route element={<ProtectedRoute allowedRoles={['patient']} />}>
                <Route path="appointment" element={<AppointmentPage />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={['patient', 'nurse', 'doctor']} />}>
              <Route path="patient/profile" element={<PatientProfilePage />} />
            </Route>

            {/* Shared Routes */}
            <Route path="about" element={<AboutPage />} />

            {/* Redirect to role-specific dashboard */}
            <Route path="/" element={<RoleBasedRedirect />} />

            {/* Fallback for unmatched routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const RoleBasedRedirect: React.FC = () => {
    const userRole = localStorage.getItem('userRole');
    switch (userRole) {
      case 'nurse':
        return <Navigate to="/nurse/dashboard" />;
      case 'doctor':
        return <Navigate to="/doctor/dashboard" />;
      case 'patient':
        return <Navigate to="/patient/profile" />;
      default:
        return <Navigate to="/login" />;
    }
  };

export default AppLayout;
