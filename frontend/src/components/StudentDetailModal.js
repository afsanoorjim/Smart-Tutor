import React from 'react';
import styles from '../styles/Dashboard.module.css';

export default function StudentDetailModal({ student, onClose }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>X</button>
        <h2>{student.name}</h2>
        <p>📚 Class: {student.studentClass}</p>
        <p>📱 Phone: {student.phone}</p>
        <p>📅 Schedule: {student.schedule}</p>
        <p>💰 Payment Due: {student.paymentDue}</p>
        <h4>📊 Payment History</h4>
        <ul>
          {student.history.map((h, index) => (
            <li key={index}>{h.month}: {h.paid ? '✅ Paid' : '❌ Unpaid'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
