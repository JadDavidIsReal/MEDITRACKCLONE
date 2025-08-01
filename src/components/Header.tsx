import React, { useState } from 'react';
import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const userRole = localStorage.getItem('userRole');

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between z-10">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-500 lg:hidden mr-4">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-gray-800 hidden md:block">
          Health Service Management System
        </h1>
      </div>

      {userRole === 'doctor' && (
        <div className="relative">
          <button onClick={() => setNotificationsOpen(!isNotificationsOpen)} className="relative text-gray-500">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <ul>
                <li className="py-2 border-b">New message from Dr. Smith</li>
                <li className="py-2">Your appointment is confirmed.</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
