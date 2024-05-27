import React, { useState } from 'react';
import axios from 'axios';

const CreateAssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    timeLimit: '',
    createdBy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/v1/assessment/create', {
        name: formData.name,
        description: formData.description,
        timeLimit: parseInt(formData.timeLimit, 10),
        createdBy: formData.createdBy
      });
      console.log('Assessment created successfully:', response.data);
    } catch (error) {
      console.error('There was an error creating the assessment!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
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
      <button type="submit">Create Assessment</button>
    </form>
  );
};

export default CreateAssessmentForm;