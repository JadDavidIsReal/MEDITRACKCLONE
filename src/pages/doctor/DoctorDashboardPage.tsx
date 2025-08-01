import React from 'react';
import { consultations } from '../../data/mockData';
import { MessageSquare } from 'lucide-react';

const DoctorDashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>

      {/* Current Consultations */}
      <section className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Walk-in/Scheduled</h2>
          <p className="text-4xl font-bold text-blue-500">{consultations.walkIn}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Referred</h2>
          <p className="text-4xl font-bold text-green-500">{consultations.referred}</p>
        </div>
      </section>

      {/* Chat Button */}
      <section>
        <button className="flex items-center justify-center w-full md:w-auto bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          <MessageSquare className="w-6 h-6 mr-2" />
          Open Chat
        </button>
      </section>
    </div>
  );
};

export default DoctorDashboardPage;
