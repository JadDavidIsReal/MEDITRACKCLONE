import React, { useState } from 'react';
import { communityPatients, Patient } from '../../../data/mockData';
import { Plus, Edit, Trash2 } from 'lucide-react';

const CommunitySearch: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>(communityPatients);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPatient = (patient: Patient) => {
    setPatients([...patients, { ...patient, id: patients.length + 1 }]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Community Patients</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Patient
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2">Last Name</th>
              <th className="py-2">First Name</th>
              <th className="py-2">Gender</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b">
                <td className="py-2">{patient.lastName}</td>
                <td className="py-2">{patient.firstName}</td>
                <td className="py-2">{patient.gender}</td>
                <td className="py-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <AddPatientModal closeModal={() => setModalOpen(false)} addPatient={handleAddPatient} />}
    </div>
  );
};

// This would be in a separate file in a real app
const AddPatientModal: React.FC<{ closeModal: () => void, addPatient: (patient: Patient) => void }> = ({ closeModal, addPatient }) => {
    // Basic form state
    const [formState, setFormState] = useState({
        lastName: '',
        firstName: '',
        gender: 'M',
        address: '',
        contactNumber: '',
        dateOfBirth: '',
        civilStatus: 'Single',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addPatient({ ...formState, id: 0 }); // id will be set in the parent
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input name="lastName" placeholder="Last Name" onChange={handleChange} className="p-2 border rounded" />
                        <input name="firstName" placeholder="First Name" onChange={handleChange} className="p-2 border rounded" />
                        <select name="gender" onChange={handleChange} className="p-2 border rounded">
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        <input name="address" placeholder="Address" onChange={handleChange} className="p-2 border rounded" />
                        <input name="contactNumber" placeholder="Contact Number" onChange={handleChange} className="p-2 border rounded" />
                        <input name="dateOfBirth" type="date" onChange={handleChange} className="p-2 border rounded" />
                        <input name="civilStatus" placeholder="Civil Status" onChange={handleChange} className="p-2 border rounded" />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={closeModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default CommunitySearch;
