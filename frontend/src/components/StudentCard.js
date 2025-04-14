import React from 'react';
import styles from '../styles/Dashboard.module.css';

export default function StudentCard({ student, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{student.name}</h3>
      <p>📚 Class: {student.studentClass}</p>
      <p>💰 Payment Due: {student.paymentDue}</p>
      <p>📅 Schedule: {student.schedule}</p>
    </div>
  );
}
