import React from 'react';
import { consultations, recentConsultations } from '../../data/mockData';
import { MessageSquare } from 'lucide-react';

const NurseDashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Nurse Dashboard</h1>

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

      {/* Recent Consultations */}
      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Consultations</h2>
        <ul className="divide-y divide-gray-200">
          {recentConsultations.map((consult) => (
            <li key={consult.id} className="py-3 flex justify-between items-center">
              <span>{consult.name}</span>
              <span className="text-gray-500">{consult.date}</span>
            </li>
          ))}
        </ul>
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

export default NurseDashboardPage;
