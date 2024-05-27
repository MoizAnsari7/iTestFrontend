import React, { useState } from 'react';
import axios from 'axios';

const CreateTestForm = () => {
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
      const response = await axios.post('http://localhost:5000/v1/test/create', {
        testName: formData.testName,
        description: formData.description,
        createdBy: "664f5c99f98156d055b8c378",
        timeLimit: parseInt(formData.timeLimit, 10)
      });
      console.log('Test created successfully:', response.data);
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
