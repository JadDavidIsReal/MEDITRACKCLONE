import React from 'react';
import { stockHistory } from '../../data/mockData';

const HistoryPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Stock History</h1>
      <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 px-4">Date Removed</th>
              <th className="py-2 px-4">Medicine Name</th>
              <th className="py-2 px-4">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stockHistory.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.dateRemoved}</td>
                <td className="py-2 px-4">{item.medicineName}</td>
                <td className="py-2 px-4">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
