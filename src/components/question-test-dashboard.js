import { useEffect, useState } from "react";
import axios from 'axios'
import QuestionCard from "./Question-card";
import { useLocation } from "react-router";
import QuestionDetails from "./question-details.component";
import "./question-details.component.css"
const TestWithQuestionListDashboard = ( ) => {
    const [questionList, setQuestionList] = useState([])
    const location = useLocation()
    useEffect( ()=>{
      const { assessmentId , userId, testId } = location.state
        axios.get('http://localhost:5000/v1/question/questionWithAnswer/'+testId).then(
        (response)=>{setQuestionList(response.data.data);
            console.log("set q", questionList);
        }).catch((e)=>{

    })
  },[])

    return (
      <div className="question-list">
        {( questionList && questionList.length > 0) && questionList.map((question, index) => (
        //   <QuestionCard key={question.id} question={question} />
        <QuestionDetails key={question.id} question={question} index={index}/>
        ))}
      </div>
    );
  };


export default TestWithQuestionListDashboard