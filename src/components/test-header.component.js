import React from 'react';
import './test-header.component.css';

const TestHeaderComponent = ({ questionList, currentQuestionIndex, changeCurrentQuestionIndex }) => {
  const handleNextClick= ()=>{
    changeCurrentQuestionIndex( ( currentQuestionIndex < questionList.length -1 ) ? currentQuestionIndex + 1 : currentQuestionIndex )
}


const handlePreviousClick= ()=>{
    changeCurrentQuestionIndex(( currentQuestionIndex > 0 ) ? currentQuestionIndex - 1 : currentQuestionIndex)
}

return (
    <header className="header">
      <div className="right-section">
        <button className="action-button">Pause Test</button>
        <button className="action-button">Finish Test</button>
        {/* Display timer */}
        <div className="timer-circle">
          {/* Include TimerComponent here */}
        </div>
        <div>
          <span className="username"><b>@</b> Moiz Ansari</span>
        </div>
      </div>
      <div className="left-section">
        <span className="company-name">Learning Mate</span>
        <b>| &nbsp;</b>
        <select className="test-dropdown">
          <option value="test1">Test 1</option>
          <option value="test2">Test 2</option>
          <option value="test3">Test 3</option>
          <option value="test4">Test 4</option>
        </select>
      </div>
      {/* Subheader */}
      <div className="subheader">
        <div className="subheader-left">
          {/* Display section name and current question index */}
          <span className="section-name">Angular &nbsp; <b>|</b> &nbsp; Question <b>{currentQuestionIndex + 1}</b> of <b>{questionList.length}</b></span>
        </div>
        <div className="subheader-center">
          {/* Previous button */}
          <button className="prev-next-circle" onClick={handlePreviousClick} style={{ padding: 0, margin: 0, border: '2px solid gray' }}>
            <div>Prev</div>
          </button>
          {/* Display question numbers */}
          {( questionList && questionList.length > 0  ) && questionList.map((question, index) => {
            console.log("list is " , questionList);
            return (
            <div key={index} className={`number-circle ${index === currentQuestionIndex && "active"}`}>
              {index + 1}
            </div>)
})}
          {/* Next button */}
          <button className="prev-next-circle" onClick={handleNextClick} style={{ padding: 0, margin: 0, border: '2px solid gray' }}>
            <div>Next</div>
          </button>
        </div>
        <div className="subheader-right">
          <img src="./video-image.jpeg" alt="Rectangular" className="rectangular-image" />
        </div>
      </div>
    </header>
  );
}

export default TestHeaderComponent;
