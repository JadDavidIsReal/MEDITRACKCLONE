import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (role: 'nurse' | 'doctor' | 'patient') => {
    localStorage.setItem('userRole', role);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Health Service Management System
        </h1>
        <p className="text-gray-600 mb-8">
          Please select your role to log in.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => handleLogin('nurse')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Login as Nurse
          </button>
          <button
            onClick={() => handleLogin('doctor')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Login as Doctor
          </button>
          <button
            onClick={() => handleLogin('patient')}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Login as Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
