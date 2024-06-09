import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const addOptionForm = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    answerText:"",
    questionId:"",
    order:0,
    isCorrect:false,
    solution:"",
    explaination:""
  });
  
  useEffect(() => {
     }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const { assessmentId, userId, testId } = location.state
      const { questionId } = location.state
      console.log("add option mounting location data", questionId);
      
          let body = { ...formData, questionId : questionId }
          axios.get('http://localhost:5000/v1//option/save', body ).then(
          (response)=>{
              console.log("option added response", response.data);
              // setTests(response.data.data);
          }).catch((e)=>{
              console.log("response error add option",e);
      })
    }catch(e)
    {

    }}
   

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
      {/* <div>
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
      </div> */}
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
      {
        (!selectedTestId) &&
      <div>
        <label>
          Test:
          <select
            name="testId"
            value={formData.testId}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a test</option>
            {testList.map(test => (
              <option key={test.id} value={test.id}>
                {test.testName}
              </option>
            ))}
          </select>
        </label>
      </div>
}
      <button type="submit">Create Question</button>
    </form>
  );
};

export default addOptionForm;
