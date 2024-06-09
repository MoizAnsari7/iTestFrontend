import { useEffect, useState } from "react";
import axios from 'axios'
import QuestionCard from "./Question-card";
import { useLocation } from "react-router";

const QuestionList = ( ) => {
    const [questionList, setQuestionList] = useState([])
    const location = useLocation()
    useEffect( ()=>{
      const { assessmentId , userId, testId } = location.state
        axios.post('http://localhost:5000/v1/question/list').then(
        (response)=>{setQuestionList(response.data.data);
            console.log("set q", questionList);
        }).catch((e)=>{

    })
  },[])

    return (
      <div className="question-list">
        {( questionList && questionList.length > 0) && questionList.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    );
  };


export default QuestionList