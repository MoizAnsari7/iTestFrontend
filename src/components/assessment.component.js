import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AssessmentList from './assessment-list.component';
import { useNavigate } from 'react-router';

const CreateAssessmentForm = () => {
  const navigation = useNavigate()
  const [ userList , setUserList] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    timeLimit: '',
    createdBy: '',
    test : []
  });

  useEffect(()=>{
    getUserList()
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const getUserList = async ()=>{
    try{
    const response = await axios.get('http://localhost:5000/v1/user/list');
    console.log(response.data.data);
    setUserList(response.data.data ? response.data.data : [])
    }catch(e)
    {
      console.log("error in get user list",e);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/v1/assessment/create', {
        name: formData.name,
        description: formData.description,
        timeLimit: parseInt(formData.timeLimit, 10),
        createdBy: formData.createdBy,
        // createdBy: "664b5b70f28e8242bf2b1494"//hard coded for sometime.
        
      });
      console.log('Assessment created successfully:', response.data);
    } catch (error) {
      console.error('There was an error creating the assessment!', error);
    }
  };

  return (
    <>
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
        {/* <label>
          Created By:
          <input
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
          />
        </label> */}
        <label>
        Created By:
          <select
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a User</option>
            {userList.map(user => (
              <option key={user.id} value={user.id}>
                {user.email }
              </option>
            ))}
          </select>
        </label>

      </div>
      <button type="submit">Create Assessment</button>
    </form>
    <AssessmentList/>
    </>
  );
};

export default CreateAssessmentForm;