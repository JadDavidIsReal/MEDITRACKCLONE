import React, { useState } from 'react';
import { communityPatients, Patient } from '../../data/mockData';

const PatientProfilePage: React.FC = () => {
  // For demonstration, we'll use the first patient from the mock data.
  // In a real app, this would come from a route parameter or a search selection.
  const [patient] = useState<Patient>(communityPatients[0]);
  const [nursesNotes, setNursesNotes] = useState('Patient complained of a headache. Advised to take paracetamol.');
  const [doctorsNotes, setDoctorsNotes] = useState('Prescribed a stronger painkiller.');

  const userRole = localStorage.getItem('userRole');
  const isDoctor = userRole === 'doctor';
  const isNurse = userRole === 'nurse';

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Patient Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div><span className="font-semibold">Last Name:</span> {patient.lastName}</div>
          <div><span className="font-semibold">First Name:</span> {patient.firstName}</div>
          <div><span className="font-semibold">Gender:</span> {patient.gender}</div>
          <div><span className="font-semibold">Date of Birth:</span> {patient.dateOfBirth}</div>
          <div><span className="font-semibold">Address:</span> {patient.address}</div>
          <div><span className="font-semibold">Contact:</span> {patient.contactNumber}</div>
          <div><span className="font-semibold">Civil Status:</span> {patient.civilStatus}</div>
        </div>

        {/* Nurse's Notes */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Nurse's Notes</h2>
          <textarea
            value={nursesNotes}
            onChange={(e) => isNurse && setNursesNotes(e.target.value)}
            readOnly={!isNurse}
            className={`w-full p-2 border rounded ${isNurse ? '' : 'bg-gray-100'}`}
            rows={4}
          ></textarea>
        </div>

        {/* Doctor's Notes */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Doctor's Notes</h2>
          <textarea
            value={doctorsNotes}
            onChange={(e) => isDoctor && setDoctorsNotes(e.target.value)}
            readOnly={!isDoctor}
            className={`w-full p-2 border rounded ${isDoctor ? '' : 'bg-gray-100'}`}
            rows={4}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PatientProfilePage;
