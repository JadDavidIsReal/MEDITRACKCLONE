import React, { useState } from 'react';
import { medicines, Medicine } from '../../data/mockData';
import { Plus, Edit, Trash2 } from 'lucide-react';

type Campus = 'All' | 'Fr. Selga Street' | 'Bonifacio' | 'Bajada';

const StocksPage: React.FC = () => {
  const [stock, setStock] = useState<Medicine[]>(medicines);
  const [filter, setFilter] = useState<Campus>('All');
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null);

  const filteredStock = filter === 'All' ? stock : stock.filter((med) => med.campus === filter);

  const handleSave = (medicine: Medicine) => {
    if (editingMedicine) {
      setStock(stock.map((m) => (m.id === medicine.id ? medicine : m)));
    } else {
      setStock([...stock, { ...medicine, id: Date.now() }]); // Use timestamp for unique id
    }
    setModalOpen(false);
    setEditingMedicine(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
        setStock(stock.filter((m) => m.id !== id));
    }
  };

  const handleEdit = (medicine: Medicine) => {
    setEditingMedicine(medicine);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setEditingMedicine(null);
    setModalOpen(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Stocks Management</h1>
      <div className="flex justify-between items-center mb-6">
        <div>
          <label className="mr-2">Filter by Campus:</label>
          <select onChange={(e) => setFilter(e.target.value as Campus)} className="p-2 border rounded">
            <option value="All">All</option>
            <option value="Fr. Selga Street">Fr. Selga Street</option>
            <option value="Bonifacio">Bonifacio</option>
            <option value="Bajada">Bajada</option>
          </select>
        </div>
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add Medicine
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Date Received</th>
              <th className="py-2 px-4">Expiry</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((med) => (
              <tr key={med.id} className="border-b">
                <td className="py-2 px-4">{med.name}</td>
                <td className="py-2 px-4">{med.type}</td>
                <td className="py-2 px-4">{med.dateReceived}</td>
                <td className="py-2 px-4">{med.expiry}</td>
                <td className="py-2 px-4">{med.quantity}</td>
                <td className="py-2 px-4">
                  <button onClick={() => handleEdit(med)} className="text-blue-500 hover:text-blue-700 mr-2">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(med.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <MedicineModal
          medicine={editingMedicine}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

// MedicineModal Component (could be in its own file)
interface MedicineModalProps {
    medicine: Medicine | null;
    onClose: () => void;
    onSave: (medicine: Medicine) => void;
}

const MedicineModal: React.FC<MedicineModalProps> = ({ medicine, onClose, onSave }) => {
    const [formState, setFormState] = useState<Omit<Medicine, 'id'>>({
        name: medicine?.name || '',
        type: medicine?.type || '',
        dateReceived: medicine?.dateReceived || '',
        expiry: medicine?.expiry || '',
        quantity: medicine?.quantity || 0,
        campus: medicine?.campus || 'Fr. Selga Street',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: name === 'quantity' ? parseInt(value, 10) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...formState, id: medicine?.id || Date.now() });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">{medicine ? 'Edit Medicine' : 'Add New Medicine'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input name="name" value={formState.name} onChange={handleChange} placeholder="Name" className="p-2 border rounded" />
                        <input name="type" value={formState.type} onChange={handleChange} placeholder="Type" className="p-2 border rounded" />
                        <input name="dateReceived" value={formState.dateReceived} type="date" onChange={handleChange} className="p-2 border rounded" />
                        <input name="expiry" value={formState.expiry} type="date" onChange={handleChange} className="p-2 border rounded" />
                        <input name="quantity" value={formState.quantity} type="number" onChange={handleChange} placeholder="Quantity" className="p-2 border rounded" />
                        <select name="campus" value={formState.campus} onChange={handleChange} className="p-2 border rounded">
                            <option>Fr. Selga Street</option>
                            <option>Bonifacio</option>
                            <option>Bajada</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StocksPage;
