export interface Consultation {
  id: number;
  name: string;
  date: string;
}

export interface Patient {
  id: number;
  lastName: string;
  firstName: string;
  gender: 'M' | 'F';
  address: string;
  contactNumber: string;
  dateOfBirth: string;
  civilStatus: string;
}

export interface Medicine {
    id: number;
    name: string;
    type: string;
    dateReceived: string;
    expiry: string;
    quantity: number;
    campus: 'Fr. Selga Street' | 'Bonifacio' | 'Bajada';
}

export const consultations = {
  walkIn: 5,
  referred: 2,
};

export const recentConsultations: Consultation[] = [
  { id: 1, name: 'John Smith', date: '2023-10-27' },
  { id: 2, name: 'Jane Doe', date: '2023-10-27' },
  { id: 3, name: 'Peter Jones', date: '2023-10-26' },
];

export const communityPatients: Patient[] = [
    { id: 1, lastName: 'Dela Cruz', firstName: 'Juan', gender: 'M', address: 'Davao City', contactNumber: '09123456789', dateOfBirth: '1990-01-01', civilStatus: 'Single' },
    { id: 2, lastName: 'Santos', firstName: 'Maria', gender: 'F', address: 'Davao City', contactNumber: '09123456789', dateOfBirth: '1992-05-10', civilStatus: 'Married' },
];

export const medicines: Medicine[] = [
    { id: 1, name: 'Paracetamol', type: 'Tablet', dateReceived: '2023-10-01', expiry: '2025-10-01', quantity: 100, campus: 'Fr. Selga Street' },
    { id: 2, name: 'Amoxicillin', type: 'Capsule', dateReceived: '2023-09-15', expiry: '2024-09-15', quantity: 50, campus: 'Bonifacio' },
    { id: 3, name: 'Salbutamol', type: 'Nebule', dateReceived: '2023-10-10', expiry: '2024-04-10', quantity: 75, campus: 'Bajada' },
];

export const stockHistory = [
    { id: 1, dateRemoved: '2023-10-26', medicineName: 'Paracetamol', quantity: 10 },
    { id: 2, dateRemoved: '2023-10-25', medicineName: 'Amoxicillin', quantity: 5 },
];
