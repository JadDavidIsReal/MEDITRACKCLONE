import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, User, Search, Archive, FileText, MessageSquare, Bell, LogOut, ShieldQuestion } from 'lucide-react';

interface SidebarProps {
  role: 'nurse' | 'doctor' | 'patient';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const nurseNav = [
    { name: 'Dashboard', to: '/nurse/dashboard', icon: LayoutDashboard },
    { name: 'Search', to: '/search', icon: Search },
    { name: 'Stocks', to: '/stocks', icon: Archive },
    { name: 'History', to: '/history', icon: FileText },
    { name: 'Reports', to: '/reports', icon: FileText },
    { name: 'About', to: '/about', icon: ShieldQuestion },
  ];

  const doctorNav = [
    { name: 'Dashboard', to: '/doctor/dashboard', icon: LayoutDashboard },
    { name: 'Search', to: '/search', icon: Search },
    { name: 'Chat', to: '/chat', icon: MessageSquare },
    { name: 'Notifications', to: '/notifications', icon: Bell },
    { name: 'About', to: '/about', icon: ShieldQuestion },
  ];

  const patientNav = [
    { name: 'Profile', to: '/patient/profile', icon: User },
    { name: 'Book Appointment', to: '/appointment', icon: FileText },
    { name: 'About', to: '/about', icon: ShieldQuestion },
  ];

  const getNavLinks = () => {
    switch (role) {
      case 'nurse':
        return nurseNav;
      case 'doctor':
        return doctorNav;
      case 'patient':
        return patientNav;
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-800 text-white w-64">
      <div className="flex items-center mb-8">
        <img src="/Logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold">HSMS</h1>
      </div>
      <nav className="flex-grow">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-2 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white ${
                isActive ? 'bg-gray-700 text-white' : ''
              }`
            }
          >
            <link.icon className="w-5 h-5" />
            <span className="mx-4">{link.name}</span>
          </NavLink>
        ))}
      </nav>
      <div>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 mt-2 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white w-full"
        >
          <LogOut className="w-5 h-5" />
          <span className="mx-4">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
