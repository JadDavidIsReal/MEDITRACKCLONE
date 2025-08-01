import React, { useState } from 'react';
import StudentSearch from './search/StudentSearch';
import EmployeeSearch from './search/EmployeeSearch';
import CommunitySearch from './search/CommunitySearch';

type Tab = 'student' | 'employee' | 'community';

const SearchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('student');

  const renderContent = () => {
    switch (activeTab) {
      case 'student':
        return <StudentSearch />;
      case 'employee':
        return <EmployeeSearch />;
      case 'community':
        return <CommunitySearch />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('student')}
          className={`py-2 px-4 ${activeTab === 'student' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        >
          Students
        </button>
        <button
          onClick={() => setActiveTab('employee')}
          className={`py-2 px-4 ${activeTab === 'employee' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        >
          Employees
        </button>
        <button
          onClick={() => setActiveTab('community')}
          className={`py-2 px-4 ${activeTab === 'community' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        >
          Community
        </button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default SearchPage;
