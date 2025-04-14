import React, { useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import StudentCard from '../components/StudentCard';
import StudentDetailModal from '../components/StudentDetailModal';

const dummyStudents = [
  {
    id: 1,
    name: 'John Doe',
    studentClass: '9',
    paymentDue: '500 BDT',
    schedule: 'Every Tuesday, 5 PM',
    phone: '017XXXXXXX',
    history: [
      { month: 'March', paid: true },
      { month: 'April', paid: false },
    ],
  },
  {
    id: 2,
    name: 'Fatema Khatun',
    studentClass: '8',
    paymentDue: '0 BDT',
    schedule: 'Every Thursday, 3 PM',
    phone: '018XXXXXXX',
    history: [
      { month: 'March', paid: true },
      { month: 'April', paid: true },
    ],
  },
];

export default function Dashboard() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>📋 My Students</h1>
      <div className={styles.grid}>
        {dummyStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onClick={() => setSelectedStudent(student)}
          />
        ))}
      </div>

      {selectedStudent && (
        <StudentDetailModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}
