import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateQuestionForm = () => {
  const [formData, setFormData] = useState({
    question: '',
    questionType: 'MCQ4',
    difficultyLevel: 'EASY',
    createdBy: '',
    isMarksBased: 'yes',
    marks: '',
    testId: ''
  });
  const [testList, setTests] = useState([])
  
  useEffect(async ()=>{
    try{
        const response = await axios.get('http://localhost:5000/v1/test/list');
        setTests(response.data.data);
    }catch(c){

    }
  },)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/v1/question/save', {
        ...formData,
        marks: parseInt(formData.marks, 10)
      });
      console.log('Question created successfully:', response.data);
    } catch (error) {
      console.error('There was an error creating the question!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Question:
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Question Type:
          <select
            name="questionType"
            value={formData.questionType}
            onChange={handleChange}
          >
            <option value="MCQ4">MCQ4</option>
            <option value="MCQ2">MCQ2</option>
            <option value="Descriptive">Descriptive</option>
            <option value="TrueFalse">True/False</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Difficulty Level:
          <select
            name="difficultyLevel"
            value={formData.difficultyLevel}
            onChange={handleChange}
          >
            <option value="EASY">EASY</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HARD">HARD</option>
          </select>
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
          Is Marks Based:
          <select
            name="isMarksBased"
            value={formData.isMarksBased}
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Marks:
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Test ID:
          <input
            type="text"
            name="testId"
            value={formData.testId}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Create Question</button>
    </form>
  );
};

export default CreateQuestionForm;
