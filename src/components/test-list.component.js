import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestList = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/test/list');
        setTests(response.data.data);
      } catch (error) {
        console.error('Error fetching the tests:', error);
      }
    };

    fetchTests();
  }, []);

  return (
    <div style={styles.container}>
      {tests.map(test => (
        <div key={test.id} style={styles.card}>
          <h3>{test.testName}</h3>
          <p>{test.description}</p>
          <p><strong>Time Limit:</strong> {test.timeLimit} minutes</p>
          <p><strong>Created By:</strong> {test.createdBy}</p>
          <p><strong>Created At:</strong> {new Date(test.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  },
  card: {
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default TestList
