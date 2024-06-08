import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const TestList = () => {
  const [tests, setTests] = useState([]);
  const location = useLocation()
  useEffect(() => {
    const { assessmentId , userId } = location.state
    console.log("test list mounting location data",assessmentId , userId);
    if(assessmentId){
      const fetchTestListByAssessmentId = async () => {
        try {
          const response = await axios.get('http://localhost:5000/v1/assessment/testList/'+ assessmentId);
          // console.log("api respone",response.data.data);
          setTests(response.data.data);
        } catch (error) {
          console.error('Error fetching the tests:', error);
        }
      };
  
      fetchTestListByAssessmentId();
    
    }else{
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/test/list');
        setTests(response.data.data);
      } catch (error) {
        console.error('Error fetching the tests:', error);
      }
    };

    fetchTests();
  }
  }, []);

  const handleTestClick = (test)=>{

  }
  const handleAddQuestion = (test)=>{

  }
  const handleShowQuestionList = (test)=>{
    
  }
  return (
    <div style={styles.container}>
      {tests.map(test => (
        <div key={test.id} style={styles.card} onClick={ ()=>{ handleTestClick(test) } }>
          <h3>{test.testName}</h3>
          <p>{test.description}</p>
          <p><strong>Time Limit:</strong> {test.timeLimit} minutes</p>
          <p><strong>Created By:</strong> {test.createdBy}</p>
          <p><strong>Created At:</strong> {new Date(test.createdAt).toLocaleString()}</p>
          <button  onClick={()=>handleAddQuestion(test)}>Add question</button>
          <button  onClick={()=>handleShowQuestionList(test)}>show question list</button>
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
