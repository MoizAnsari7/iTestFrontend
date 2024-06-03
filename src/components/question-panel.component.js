import React from 'react';
import './QuestionPanelComponent.css';
import OptionPanelComponent from './option-panel.component';
import QuestionComponent from './question-box';
import QuestionPanelListComponent from './QuestionPanelList.component';

const QuestionPanelComponent = ({ questionList, currentQuestionIndex, changeCurrentQuestionIndex }) => {
    console.log("panle", questionList, currentQuestionIndex,questionList[currentQuestionIndex]);
    return (
        <div className="question-panel">
            <QuestionPanelListComponent questionList={questionList}  currentQuestionIndex={ currentQuestionIndex } changeCurrentQuestionIndex={changeCurrentQuestionIndex} />
            {/* Left Section */}
            <QuestionComponent  question={questionList[currentQuestionIndex]?.question}  questionList={questionList}  currentQuestionIndex={ currentQuestionIndex } />        
            <div className="divider"></div>
            {/* Right Section */}
            <OptionPanelComponent  options={questionList[currentQuestionIndex]} />
        </div>
    );
}

export default QuestionPanelComponent; 