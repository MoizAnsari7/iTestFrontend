import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TestHeaderComponent from "../components/test-header.component";
import QuestionPanelComponent from "../components/question-panel.component";
import TestFooterComponent from "../components/test-footer.component";
import './test.screen.css';

const TestScreen = () => {
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestionList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/question/questionWithAnswer/664f5fa79cadea9bd09f44ed');
        setQuestionList(response.data.data);
      } catch (error) {
        console.error('Error fetching the question list:', error);
      }
    };
    fetchQuestionList();
  }, []);
  const changeCurrentQuestionIndexHandler = (value)=>{
    console.log("Handler",value);
    setCurrentQuestionIndex(value);
  }
  return (
    <div className="test-screen-container">
      <TestHeaderComponent questionList={questionList} currentQuestionIndex={currentQuestionIndex} changeCurrentQuestionIndex={changeCurrentQuestionIndexHandler} />
      <div className="content-container">
        <QuestionPanelComponent questionList={questionList} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} />
      </div>
      <TestFooterComponent />
    </div>
  );
}

export default TestScreen;
