import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const CreateTestForm = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    testName: '',
    description: '',
    createdBy: '',
    timeLimit: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("router data", location.state);
      const reqBody = {
        testName: formData.testName,
        description: formData.description,
        createdBy: location.state.userId ? location.state.userId : "",
        timeLimit: parseInt(formData.timeLimit, 10),
        assessmentId :  location.state.assessmentId ? location.state.assessmentId : ""
      }
      console.log("req body",reqBody);
      const response = await axios.post('http://localhost:5000/v1/test/create', reqBody);
      console.log('Test created successfully:',  response.data);
    } catch (error) {
      console.error('There was an error creating the test!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Test Name:
          <input
            type="text"
            name="testName"
            value={formData.testName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Created By:
          <input
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Time Limit (minutes):
          <input
            type="number"
            name="timeLimit"
            value={formData.timeLimit}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Create Test</button>
    </form>
  );
};

export default CreateTestForm;
