import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AssessmentList = () => {
  const navigation = useNavigate()
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/assessment/list');
        setAssessments(response.data.data);
      } catch (error) {
        console.error('Error fetching the assessments:', error);
      }
    };

    fetchAssessments();
  }, []);


  
  const handleAddTest = (assessmentInfo)=>{
    console.log("handleAddTest");
    navigation("/addtest",{ state : {  assessmentId : assessmentInfo.id, userId : assessmentInfo.createdBy  }})
  }
  const handleShowTestList = ( assessmentInfo )=>{ 
    console.log("handleShowTestList");
    navigation("/testlist",{ state : {  assessmentId : assessmentInfo.id, userId : assessmentInfo.createdBy  }})
    //route to test list component
  }
  return (
    <div style={styles.container}>
      {assessments.map(assessment => (
        <div key={assessment.id} style={styles.card} onClick={ ()=>handleShowTestList(assessment) }>
          <h3>{assessment.name}</h3>
          <p>{assessment.description}</p>
          <p><strong>Time Limit:</strong> {assessment.timeLimit} minutes</p>
          <p><strong>Created By:</strong> {assessment.createdBy}</p>
          <p><strong>Created At:</strong> {new Date(assessment.createdAt).toLocaleString()}</p>
          <button  onClick={()=>handleAddTest(assessment)}>Add Test</button>
          <button  onClick={()=>handleShowTestList(test)}>show Test list</button>

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

export default AssessmentList;
