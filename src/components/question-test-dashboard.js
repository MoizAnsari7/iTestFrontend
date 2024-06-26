import { useEffect, useState } from "react";
import axios from 'axios'
import QuestionCard from "./Question-card";
import { useLocation, useNavigate } from "react-router";
import QuestionDetails from "./question-details.component";
import "./question-details.component.css"
const TestWithQuestionListDashboard = ( ) => {
    const [questionList, setQuestionList] = useState([])
    const location = useLocation()
    const [ selectedTest , setSelectedTest ] = useState({})
    useEffect( ()=>{
      const { assessmentId , userId, test } = location.state;
      console.log(location.state,);
      setSelectedTest(test)
        axios.get('http://localhost:5000/v1/question/questionWithAnswer/'+ test.id).then(
        (response)=>{setQuestionList(response.data.data);
            console.log("set q", questionList);
        }).catch((e)=>{

    })
  },[])
  const navigation = useNavigate()
  const handleSelection = (question)=>{
    console.log("handleQuestionSelect");
    navigation("/addOption", { state : { question : question }})
  }

    return (
      <div className="question-list">
        <h1>{ selectedTest.testName }</h1>
        <h5>{ selectedTest.description }</h5>
        {( questionList && questionList.length > 0) && questionList.map((question, index) => (
        //   <QuestionCard key={question.id} question={question} />
        <QuestionDetails key={question.id} question={question} index={index} onClick={ handleSelection(question) }/>
        ))}
      </div>
    );
  };


export default TestWithQuestionListDashboard