import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/students/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setStudents(response.data);
      } catch (err) {
        console.log('Error fetching students:', err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
