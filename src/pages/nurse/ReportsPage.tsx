import React from 'react';

const ReportsPage: React.FC = () => {
  // Mock data for charts
  const topUsedMedicines = [
    { name: 'Paracetamol', value: 80 },
    { name: 'Amoxicillin', value: 60 },
    { name: 'Salbutamol', value: 40 },
    { name: 'Loratadine', value: 20 },
  ];

  const monthlyUsage = [
    { month: 'Jan', value: 50 },
    { month: 'Feb', value: 70 },
    { month: 'Mar', value: 90 },
    { month: 'Apr', value: 60 },
  ];

  const lowStockAlerts = [
    { name: 'Ibuprofen', quantity: 15 },
    { name: 'Mefenamic Acid', quantity: 10 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      {/* Top-Used Medicines */}
      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Top-Used Medicines</h2>
        <div className="space-y-4">
          {topUsedMedicines.map((med) => (
            <div key={med.name}>
              <div className="flex justify-between mb-1">
                <span>{med.name}</span>
                <span>{med.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${med.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Usage Trends */}
      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Usage Trends</h2>
        <div className="flex justify-around items-end h-64 bg-gray-50 p-4 rounded">
          {monthlyUsage.map((month) => (
            <div key={month.month} className="flex flex-col items-center">
              <div
                className="w-12 bg-green-500 rounded-t-lg"
                style={{ height: `${month.value * 2}px` }}
              ></div>
              <span className="mt-2 text-sm">{month.month}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Low Stock Alerts */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Low Stock Alerts</h2>
        <ul className="divide-y divide-gray-200">
          {lowStockAlerts.map((alert) => (
            <li key={alert.name} className="py-3 flex justify-between items-center">
              <span>{alert.name}</span>
              <span className="font-bold text-red-500">{alert.quantity} remaining</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ReportsPage;
