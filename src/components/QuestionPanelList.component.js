import React, { useState, useEffect } from 'react';
import './QuestionPanelListComponent.css';
import axios from 'axios';
const QuestionPanelListComponent = ({ questionList, currentQuestionIndex, changeCurrentQuestionIndex }) => {
    // const [ currentIndex , setCurrentIndex ] = useState(0);
    // const [ questionList , setQuestionList ] = useState([]);
    // useEffect(() => {
    //     const fetchQuestionList = async () => {
    //       try {
    //         //through test id we will get question and its options
    //         const response = await axios.get('http://localhost:5000/v1/question/questionWithAnswer/664f5fa79cadea9bd09f44ed');
    //         console.log(response.data.data);
    //         setQuestionList(response.data.data)
    //       } catch (error) {
    //         console.error('Error fetching the question with options for a test:', error);
    //       }}
    //       fetchQuestionList()
    // },[])
    return (
        <div className="side-panel">
            {/* Header with circles */}
            <div className="side-panel-header">
                <div className="status-circle answered">1</div>
                <div className="status-circle not-answered">2</div>
                <div className="status-circle marked">3</div>
                <div className="status-circle not-visited">4</div>
            </div>
            <div className="status-text">
                <span className="answered">Answered</span>
                <span className="not-answered">Not Answered</span>
                <span className="marked">Marked</span>
                <span className="not-visited">Not Visited</span>
            </div>
            {/* Section title */}
            <div className="section-title">
                <span className="section-title-text">Section Title</span>
                <span className="question-count">
                    { questionList.length } Questions <span className="caret-icon">&#9660;</span>
                </span>
            </div>
            {/* List of question with colored borders */}
            <div className="side-panel-list">
                {
                    (questionList && questionList.length>  0) && questionList.map((question, index)=>{
                        return (<div  key={question._id} className={ `list-item answered-border ${ ( currentQuestionIndex === index ) ? "active" : "" }`}>
                            <b>{ index + 1  }. &nbsp;</b>
                            <i>{question.question}</i>
                            </div>)
                    })
                }
            </div>
        </div>
    );
}

export default QuestionPanelListComponent;
